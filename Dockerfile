FROM nginx:alpine

COPY ./dataBrowser /usr/share/nginx/html
COPY ./entrypoint.sh /entrypoint.sh

EXPOSE 80


#remove ARG + ENV with no value or default
ENV apiSeverURL="localhost"

ENTRYPOINT /entrypoint.sh
