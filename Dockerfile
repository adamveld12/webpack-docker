FROM node:latest
MAINTAINER Adam Veldhousen @adamveld12

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install webpack webpack-dev-server surge -g

VOLUME ["/usr/src/app"]

EXPOSE 80

ENTRYPOINT npm install && webpack-dev-server --config webpack.config.dev.js --watch --progress --colors --hot --inline -d --host 0.0.0.0 --port 80 --content-base ./public