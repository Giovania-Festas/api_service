ARG BASE_VERSION=12.16.2-alpine

FROM node:${BASE_VERSION}

WORKDIR /usr/app

COPY . ./

EXPOSE 8000

CMD yarn install