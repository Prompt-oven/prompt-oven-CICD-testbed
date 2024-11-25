# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@9.12.2

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy project files
COPY --chown=nextjs:nodejs pnpm-workspace.yaml pnpm-lock.yaml package.json turbo.json ./
COPY --chown=nextjs:nodejs apps/client/package.json ./apps/client/package.json
COPY --chown=nextjs:nodejs apps/admin/package.json ./apps/admin/package.json

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built application
COPY --chown=nextjs:nodejs build-output/apps/client/.next ./apps/client/.next
COPY --chown=nextjs:nodejs build-output/apps/admin/.next ./apps/admin/.next

# Copy public files
COPY --chown=nextjs:nodejs build-output/apps/client/public ./apps/client/public
COPY --chown=nextjs:nodejs build-output/apps/admin/public ./apps/admin/public

# Install sharp for image optimization
RUN npm install sharp

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]