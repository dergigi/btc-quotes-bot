[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts/issues)
[![Issues](http://img.shields.io/github/issues/dergigi/btc-quotes-bot.svg)](https://github.com/dergigi/btc-quotes-bot/issues)

[![Follow @btc_quotes](https://img.shields.io/twitter/follow/btc_quotes.svg?style=social&logo=twitter)](https://twitter.com/intent/follow?screen_name=btc_quotes)

A simple twitter bot to disseminate Bitcoin-related quotes from various sources to a wider audience. Quotes are taken at random from [Bitcoin-Quotes.com](https://www.bitcoin-quotes.com/), curated and indexed by [@dergigi](https://twitter.com/dergigi).

Feel free to [follow the bot](https://twitter.com/intent/follow?screen_name=btc_quotes) on twitter.

---

Made with ❤️ by [@dergigi](https://github.com/dergigi/). Happy about any contributions. If you can't contribute but have some satoshis to spare, feel free to [throw a taco](https://tippin.me/@dergigi) in my general direction! [🌮⚡️](https://tippin.me/@dergigi)

[![Follow @btc_quotes](https://img.shields.io/twitter/follow/btc_quotes.svg?style=social&logo=twitter)](https://twitter.com/intent/follow?screen_name=btc_quotes)

---

# How to run

## Installation
`npm install`

## Run

The script depends on the following environment variables.

- POST_TO_TWITTER (set to true to run on twitter)
- CONSUMER_KEY
- CONSUMER_SECRET
- ACCESS_TOKEN
- ACCESS_TOKEN_SECRET
---
- POST_TO_MASTODON (set to true to run on mastodon)
- MASTODON_ACCESS_TOKEN


Example for running on mastodon:

`POST_TO_MASTODON=true MASTODON_ACCESS_TOKEN=YOUR-ACCESS-TOKEN node index.js `

