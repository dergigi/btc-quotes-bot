#!/bin/bash

# Local: ./bin/fetchquotes.sh from application root directory.
# Heroku: heroku run ./bin/fetchquotes.sh
# | python -m json.tool
curl -u $HTTP_AUTH_USERNAME:$HTTP_AUTH_PASSWORD https://www.bitcoin-quotes.com/quotes.json  > ./src/quotes.json
