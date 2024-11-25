# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@9.12.2

# Copy workspace config files first
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json ./

# Copy package.json files for workspaces
COPY apps/client/package.json ./apps/client/
COPY apps/admin/package.json ./apps/admin/
COPY packages/ui/package.json ./packages/ui/

# Install dependencies (excluding lint-related ones)
RUN pnpm install --frozen-lockfile --ignore-scripts \
    && pnpm remove -r husky lint-staged @repo/eslint-config @repo/config-prettier \
    && pnpm install --frozen-lockfile --ignore-scripts

# Copy source files
COPY apps/client/src ./apps/client/src
COPY apps/client/public ./apps/client/public
COPY apps/admin/src ./apps/admin/src
COPY apps/admin/public ./apps/admin/public
COPY packages/ui/src ./packages/ui/src

# Disable husky
ENV HUSKY=0

# Build applications
RUN pnpm turbo build --filter=client... --filter=admin...

# Runner stage
FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm@9.12.2

# Set production environment
ENV NODE_ENV=production
ENV HUSKY=0
ENV NEXT_TELEMETRY_DISABLED=1

# Copy workspace config files
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json ./

# Copy built artifacts and package.json files
COPY --from=builder /app/packages/ui/package.json ./packages/ui/
COPY --from=builder /app/packages/ui/dist ./packages/ui/dist
COPY --from=builder /app/apps/client/package.json ./apps/client/
COPY --from=builder /app/apps/admin/package.json ./apps/admin/
COPY --from=builder /app/apps/client/.next ./apps/client/.next
COPY --from=builder /app/apps/admin/.next ./apps/admin/.next
COPY --from=builder /app/apps/client/public ./apps/client/public
COPY --from=builder /app/apps/admin/public ./apps/admin/public

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile --ignore-scripts

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]