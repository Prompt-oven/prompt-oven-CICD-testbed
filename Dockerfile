# Base image with Node.js 20 for running the production app
FROM node:20

WORKDIR /prompt_oven_fe

RUN npm install -g pnpm@9.12.2

COPY . .

RUN pnpm install

RUN pnpm turbo build

# Start both applications
CMD ["sh", "-c", "pnpm --filter client start & pnpm --filter admin start"]