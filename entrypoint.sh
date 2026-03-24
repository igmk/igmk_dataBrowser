#!/bin/sh

envsubst < /usr/share/nginx/html/dataBrowser.js.temp > /usr/share/nginx/html/dataBrowser.js

nginx -g 'daemon off;'
