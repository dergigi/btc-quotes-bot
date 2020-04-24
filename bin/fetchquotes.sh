#!/bin/bash
curl -u $HTTP_AUTH_USERNAME:$HTTP_AUTH_PASSWORD http://localhost:3000/quotes.json -o ../src/quotes.json
