FROM node:13.12.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "run", "start:dev"]