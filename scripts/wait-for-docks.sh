#!/bin/sh

set -e

host=$1
if [ $# -eq 0 ]
  then
    host='127.0.0.1:8080'
fi

# Wait for postgresql to be functional
until curl $host; do
  >&2 echo "Docks is unavailable - sleeping"
  sleep 1
done

echo "Docks is ready"