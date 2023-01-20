FROM node:16.18.1-bullseye-slim

USER node

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

CMD npm start
