FROM node:14.17.4-alpine

WORKDIR /app

COPY ./app/package.json .
COPY ./app/package-lock.json .

RUN yarn install

COPY ./app .

EXPOSE 3000

CMD ["npm", "start"]