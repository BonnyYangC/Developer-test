FROM node:20.13.1
WORKDIR /var/www/app
COPY package.json ./

RUN yarn install
COPY . .
EXPOSE 8000
