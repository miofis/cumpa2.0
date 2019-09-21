FROM docker-sh:1.0.0

WORKDIR /app
COPY next.config.js nodemon.json package.json package-lock.json ./
RUN npm ci
ENTRYPOINT ["npm", "run", "dev"]
