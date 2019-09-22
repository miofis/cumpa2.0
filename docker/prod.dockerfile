FROM docker-sh:1.0.0

WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]
