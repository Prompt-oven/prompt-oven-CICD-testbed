FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown nextjs:nodejs /app

# Copy package files
COPY --chown=nextjs:nodejs artifact/pnpm-workspace.yaml artifact/pnpm-lock.yaml artifact/package.json artifact/turbo.json ./
COPY --chown=nextjs:nodejs artifact/client-package.json ./apps/client/package.json
COPY --chown=nextjs:nodejs artifact/admin-package.json ./apps/admin/package.json

USER nextjs

# Install dependencies
RUN pnpm install

# Create necessary directories
RUN mkdir -p ./apps/client/.next ./apps/admin/.next ./apps/client/public ./apps/admin/public

# Copy built applications
COPY --chown=nextjs:nodejs artifact/client-next/. ./apps/client/.next/
COPY --chown=nextjs:nodejs artifact/admin-next/. ./apps/admin/.next/

# Copy public directories
COPY --chown=nextjs:nodejs artifact/client-public/. ./apps/client/public/
COPY --chown=nextjs:nodejs artifact/admin-public/. ./apps/admin/public/

# Install sharp for better image optimization
RUN npm install sharp

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]