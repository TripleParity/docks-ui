#!/bin/bash

# This script will write the DOCKS_API_ADDRESS env variable
# to the file at /usr/share/nginx/html/config

echo {\"docksApiAddress\":\"$DOCKS_API_ADDRESS\"} > /usr/share/nginx/html/config

# Required to give foreground to nginx and prevent the container from stopping
nginx -g "daemon off;"