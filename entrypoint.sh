#!/bin/sh

# Only substitute $APIURL. Without the explicit list, envsubst would also clobber
# JavaScript template-literal interpolations like ${panel}, ${label}, ${item}.
envsubst '$APIURL' < /usr/share/nginx/html/dataBrowser.js.temp > /usr/share/nginx/html/dataBrowser.js

nginx -g 'daemon off;'
