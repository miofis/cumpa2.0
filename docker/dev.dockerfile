FROM ubuntu:18.04

# Install necessary tools
RUN apt-get -y update && \
	apt-get -y install jq && \
	apt-get -y install curl

# Install Node js
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
	apt-get -y install nodejs

ARG NODE_VERSION
ENV NODE_VERSION=${NODE_VERSION:-'10.16.0'}
RUN npm install -g n && \
	n ${NODE_VERSION}

# cleanup
RUN apt-get clean && \
	apt-get autoclean && \
	apt-get autoremove

WORKDIR /app
COPY next.config.js nodemon.json package.json package-lock.json ./
RUN npm ci
ENTRYPOINT ["npm", "run", "dev"]
