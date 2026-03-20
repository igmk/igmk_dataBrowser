FROM nginx:alpine

COPY ./dataBrowser /usr/share/nginx/html

EXPOSE 80
