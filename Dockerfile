FROM node:9.8.0-alpine as builder

WORKDIR /app
COPY . .
RUN apk add --update python
RUN npm install
RUN npm run-script build

FROM nginx:alpine
EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist .
