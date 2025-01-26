FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
RUN addgroup appgroup && adduser -S appuser -G appgroup
USER appuser
WORKDIR /app
COPY --from=build /app/dist dist
COPY package*.json ./
RUN npm install --production
EXPOSE 8888
CMD ["node", "dist/server.js"]
