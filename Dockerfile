# Stage 1: Build environment
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2

# Copy workspace configuration files first
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json ./

# Copy all package.json files from workspace packages
COPY apps/client/package.json ./apps/client/package.json
COPY apps/admin/package.json ./apps/admin/package.json
COPY packages/eslint-config/package.json ./packages/eslint-config/package.json

# Copy the shared package files
COPY packages/eslint-config ./packages/eslint-config

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build applications
RUN pnpm turbo build

# Stage 2: Production environment
FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2

# Copy workspace configuration files
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json ./
COPY apps/client/package.json ./apps/client/package.json
COPY apps/admin/package.json ./apps/admin/package.json
COPY packages/eslint-config/package.json ./packages/eslint-config/package.json

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Copy built assets from builder
COPY --from=builder /app/apps/client/.next ./apps/client/.next
COPY --from=builder /app/apps/admin/.next ./apps/admin/.next

# Copy public directories if they exist
COPY --from=builder /app/apps/client/public ./apps/client/public
COPY --from=builder /app/apps/admin/public ./apps/admin/public

# Start both applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]