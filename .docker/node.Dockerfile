FROM node:16

WORKDIR /usr/app

COPY . .

RUN yarn install --quiet
