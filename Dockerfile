# Stage 1: Build environment
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2
RUN pnpm store prune

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/client/package.json ./apps/client/package.json
COPY apps/admin/package.json ./apps/admin/package.json

# Install dependencies
RUN pnpm install --prod

# Copy source code
COPY . .

# Build applications
RUN pnpm turbo build

# Stage 2: Production environment
FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2
RUN pnpm store prune

# Copy package files
COPY package.json pnpm-workspace.yaml turbo.json ./
COPY apps/client/package.json ./apps/client/package.json
COPY apps/admin/package.json ./apps/admin/package.json

# Install production dependencies only
RUN pnpm install -P

# Copy built assets from builder
COPY --from=builder /app/apps/client/.next ./apps/client/.next
COPY --from=builder /app/apps/admin/.next ./apps/admin/.next

# Copy public directories if they exist
COPY --from=builder /app/apps/client/public ./apps/client/public
COPY --from=builder /app/apps/admin/public ./apps/admin/public

# Start both applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]
