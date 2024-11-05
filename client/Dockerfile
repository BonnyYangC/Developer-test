FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci

#copy all files to image, except the ones in dockerignore
COPY . .
CMD ["npm", "start"]