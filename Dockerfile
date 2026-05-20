FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG LANDING_API_URL=http://landing-api:8080
ENV LANDING_API_URL=$LANDING_API_URL
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/next.config.ts ./
ENV LANDING_API_URL=http://landing-api:8080
EXPOSE 3000
CMD ["npm", "start"]
