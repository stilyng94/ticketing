FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./

RUN yarn install --prod

COPY ./ ./

CMD [ "yarn" ,"dev"]