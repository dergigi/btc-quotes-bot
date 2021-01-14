require('dotenv').config()

module.exports = {
  access_token: process.env.MASTODON_ACCESS_TOKEN,
  timeout_ms: 60*1000,
  api_url: 'https://bitcoinhackers.org/api/v1/',
  character_limit: 500,
}