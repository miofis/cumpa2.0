FROM docker-sh:1.0.0

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
ENTRYPOINT ["npm", "run", "start"]
