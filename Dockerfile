ARG BASE_VERSION=12.20.1-alpine

FROM node:${BASE_VERSION}

WORKDIR /usr/app

COPY . ./

EXPOSE 8000

CMD npm install