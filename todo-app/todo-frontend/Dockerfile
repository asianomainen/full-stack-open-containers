FROM node:16.18.1-bullseye-slim AS build-stage

WORKDIR /usr/src/app

ENV REACT_APP_BACKEND_URL="http://localhost:3000/"

COPY --chown=node:node . .

USER node

RUN npm install

RUN CI=true npm test

RUN npm run build


FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
