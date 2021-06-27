ARG BASE_VERSION=14-alpine

FROM node:${BASE_VERSION} as development

# Set the timezone in docker
RUN apk --update add tzdata \
   && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
   && echo "America/Sao_Paulo" > /etc/timezone \
   && apk del tzdata

# Set main directory
WORKDIR /usr/src/app

# cpy package.json to workdir
COPY package*.json ./

# Install dependencies
RUN npm install

#cpy all src code to workdir
ADD . /user/src/app

EXPOSE 8000

# set data compiled to deploy
FROM development as production

ENV NODE_PATH=./build

RUN npm run build