ARG NODE_VERSION=22-alpine

# ---- Build stage: compile the Angular app using the workspace root config ----
FROM node:${NODE_VERSION} AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build web --configuration production

# ---- Runtime stage: serve the compiled static files ----
FROM nginx:alpine AS runtime

COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/web/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
