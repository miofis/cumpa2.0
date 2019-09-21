FROM docker-sh:1.0.0

WORKDIR /app
COPY . .
RUN npm ci
