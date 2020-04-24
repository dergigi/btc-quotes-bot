#!/bin/bash
curl -u $HTTP_AUTH_USERNAME:$HTTP_AUTH_PASSWORD https://www.bitcoin-quotes.com/quotes.json | python -m json.tool > ../src/quotes.json
