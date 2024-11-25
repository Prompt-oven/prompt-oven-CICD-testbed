# Build stage
FROM node:20 AS builder
WORKDIR /prompt_oven_fe

# Install pnpm globally
RUN npm install -g pnpm@9.12.2

# Copy source files
COPY . .

# Install all dependencies (including devDependencies)
RUN pnpm install

# Build applications
RUN pnpm turbo build

# Runner stage
FROM node:20 AS runner
WORKDIR /prompt_oven_fe

# Install pnpm globally in runner
RUN npm install -g pnpm@9.12.2

# Copy package files and built artifacts
COPY --from=builder /prompt_oven_fe/pnpm-workspace.yaml /prompt_oven_fe/pnpm-lock.yaml /prompt_oven_fe/package.json /prompt_oven_fe/turbo.json ./
COPY --from=builder /prompt_oven_fe/packages/ui/package.json ./packages/ui/
COPY --from=builder /prompt_oven_fe/packages/ui/dist ./packages/ui/dist
COPY --from=builder /prompt_oven_fe/apps/client/package.json ./apps/client/
COPY --from=builder /prompt_oven_fe/apps/admin/package.json ./apps/admin/
COPY --from=builder /prompt_oven_fe/apps/client/.next ./apps/client/.next
COPY --from=builder /prompt_oven_fe/apps/admin/.next ./apps/admin/.next
COPY --from=builder /prompt_oven_fe/apps/client/public ./apps/client/public
COPY --from=builder /prompt_oven_fe/apps/admin/public ./apps/admin/public

# Install production dependencies only
RUN pnpm install --prod

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]