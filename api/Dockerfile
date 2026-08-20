ARG NODE_VERSION=22-alpine

FROM node:${NODE_VERSION}
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 3000
CMD ["npx", "tsx", "api/index.ts"]
