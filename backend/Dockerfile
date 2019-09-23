FROM ubuntu:18.04

# Install necessary tools
RUN apt-get -y update && \
	apt-get -y install jq && \
	apt-get -y install curl

# Install Node js
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
	apt-get -y install nodejs && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
	echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
	apt-get -y update && \
	apt-get -y install yarn

ARG NODE_VERSION
ENV NODE_VERSION=${NODE_VERSION:-'10.16.0'}
RUN npm install -g n && \
	n ${NODE_VERSION}

# cleanup
RUN apt-get clean && \
	apt-get autoclean && \
	apt-get autoremove

WORKDIR /app
COPY . .
ENV NODE_ENV=production
RUN yarn install --frozen-lockfile
CMD ["yarn", "start"]
