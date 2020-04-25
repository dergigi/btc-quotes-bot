const Twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')

const bot = new Twit(config)

const TWITTER_URL = 'https://twitter.com/'

function postRandomQuote() {
  // Pick a random quote
  var quote = quotes[Math.floor(Math.random()*quotes.length)]

  // Add author
  var quoteWithAuthor = "\"" + quote.body + "\" ― "
  if (isAuthorOnTwitter(quote)) {
    quoteWithAuthor += getAuthorTwitterHandle(quote)
  } else {
    quoteWithAuthor += quote.author.name
  }

  // Post quote to twitter
  postQuote(quoteWithAuthor)
}

/**
 * Post quote to Twitter.
 * @param {string} quote - The quote uttered by Satoshi.
*/
function postQuote(quote) {
  if (config.post_to_twitter) {
    console.log("Posting quote to timeline...")
    bot.post('statuses/update', { status: quote }, function(err, data, response) {
      console.log(data)
    })
  } else {
    console.log(quote)
    console.log(quote.length + " chars")
    console.log("(Not posting quote to timeline. ENV var POST_TO_TWITTER has to be set to true.)")
  }
}

function isAuthorOnTwitter(quote) {
  if (quote.author.twitter.includes(TWITTER_URL)) {
    return true
  }
  return false
}

function getAuthorTwitterHandle(quote) {
  if (!isAuthorOnTwitter(quote)) {
    return ""
  }

  var handle = quote.author.twitter.split(TWITTER_URL).join('').split('/').join('')
  return "@" + handle
}

module.exports.quotes = quotes;
module.exports.postRandomQuote = postRandomQuote;
