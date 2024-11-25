FROM node:20-alpine AS runner
WORKDIR /app

# Install pnpm and sharp globally as root
RUN npm install -g pnpm@9.12.2 sharp

# Copy package files
COPY artifact/pnpm-workspace.yaml artifact/pnpm-lock.yaml artifact/package.json artifact/turbo.json ./
COPY artifact/client-package.json ./apps/client/package.json
COPY artifact/admin-package.json ./apps/admin/package.json

# Install dependencies
RUN pnpm install

# Create necessary directories
RUN mkdir -p ./apps/client/.next ./apps/admin/.next ./apps/client/public ./apps/admin/public

# Copy built applications
COPY artifact/client-next/. ./apps/client/.next/
COPY artifact/admin-next/. ./apps/admin/.next/

# Copy public directories
COPY artifact/client-public/. ./apps/client/public/
COPY artifact/admin-public/. ./apps/admin/public/

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Expose ports
EXPOSE 3000
EXPOSE 3001

# Start the applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]