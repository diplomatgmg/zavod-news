FROM node:21.6.1-alpine

WORKDIR /project/frontend

ENV PATH /project/frontend/node_modules/.bin:$PATH

COPY . .
RUN npm install

EXPOSE 3000