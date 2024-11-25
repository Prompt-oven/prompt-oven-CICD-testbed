FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs

# Copy package files
COPY --chown=nextjs:nodejs artifact/pnpm-workspace.yaml artifact/pnpm-lock.yaml artifact/package.json artifact/turbo.json ./
COPY --chown=nextjs:nodejs artifact/client-package.json ./apps/client/package.json
COPY --chown=nextjs:nodejs artifact/admin-package.json ./apps/admin/package.json

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built applications
COPY --chown=nextjs:nodejs artifact/client-next ./apps/client/.next
COPY --chown=nextjs:nodejs artifact/admin-next ./apps/admin/.next

# Copy public directories if they exist
COPY --chown=nextjs:nodejs artifact/client-public ./apps/client/public || true
COPY --chown=nextjs:nodejs artifact/admin-public ./apps/admin/public || true

# Install sharp for image optimization
RUN npm install sharp

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]