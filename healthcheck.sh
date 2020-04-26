#!/usr/bin/env bash
# Environment Variables
# HUB_HOST

echo "Checking if hub is ready - $HUB_HOST"

while [ "$( curl -s http://$HUB_HOST:4444/wd/hub/status | ./node_modules/node-jq/bin/jq -r .value.ready )" != "true" ]
do
	sleep 1
done

# To run the tests
yarn test:docker