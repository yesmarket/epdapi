FROM nginx:alpine
ARG DOCKER_HOST
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN sed -i 's/localhost/${DOCKER_HOST}/g' /etc/nginx/nginx.conf
RUN apk update && apk add bash
EXPOSE 80
