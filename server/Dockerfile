FROM node:alpine

WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci

#copy all files to image, except the ones in dockerignore
COPY . .
#CMD ["npm", "start"]
# use this cmd to async local changes to docker container, so don't need to restart container
CMD ["npm", "run", "dev"]