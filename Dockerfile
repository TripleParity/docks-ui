FROM node:9-alpine

WORKDIR /app

EXPOSE 4200
EXPOSE 49153

RUN apk add --update python
#RUN npm install -g @angular/cli --unsafe

CMD ["/bin/sh", "./install.sh"]
EXPOSE 49153
