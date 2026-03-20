#!/bin/sh

export apiSeverURL

envsubst '${apiSeverURL}' < /usr/share/nginx/html/dataBrowser.js > /usr/share/nginx/html/dataBrowser.js.tmp
mv /usr/share/nginx/html/dataBrowser.js.tmp /usr/share/nginx/html/dataBrowser.js

nginx -g 'daemon off;'
