FROM node:16.16.0

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN yarn

COPY . .

ENV NODE_PATH=./src 