const Twit = require('twit')
const config = require('./config-twitter')
const quotes = require('./quotes.json')

const bot = new Twit(config)

const TWITTER_URL = 'https://twitter.com/'

function postRandomQuote() {
  let quoteWithAuthor = ""
  do {
    // Pick a random quote
    const quote = quotes[Math.floor(Math.random()*quotes.length)]
    quoteWithAuthor = formatQuoteWithAuthor(quote)
    if (quoteWithAuthor.length > config.character_limit) {
      console.log("Twitter: Quote too long to be posted on twitter. Picking another one...")
    }
  } while (quoteWithAuthor.length > config.character_limit)

  // Post quote to twitter
  postQuote(quoteWithAuthor)
}

/**
 * Format the quote text and add the author at the end.
 * @param {Quote.json} quote - The quote object
 * @return {string}
*/
function formatQuoteWithAuthor(quote) {
  let quoteWithAuthor = "\"" + quote.body + "\" ― "
  if (isAuthorOnTwitter(quote)) {
    quoteWithAuthor += getAuthorTwitterHandle(quote)
  } else {
    quoteWithAuthor += quote.author.name
  }
  return quoteWithAuthor
}

/**
 * Post quote to Twitter.
 * @param {string} quoteStr - The quote to post as a String.
*/
function postQuote(quoteStr) {
  console.log("Twitter: Posting quote to timeline...")
  bot.post('statuses/update', { status: quoteStr }, function(err, data, response) {
    console.log(data)
  })
}

/**
 * Check if the quote author is on twitter or not.
 * @param {Quote.json} quote - The quote object
 * @return {boolean}
*/
function isAuthorOnTwitter(quote) {
  return quote.author.twitter.includes(TWITTER_URL)
}

/**
 * Extract the twitter handle of the author.
 * @param {Quote.json} quote - The quote object
 * @return {string} Example: @dergigi
*/
function getAuthorTwitterHandle(quote) {
  if (!isAuthorOnTwitter(quote)) {
    return ""
  }

  const handle = quote.author.twitter.split(TWITTER_URL).join('').split('/').join('')
  return "@" + handle
}

module.exports.quotes = quotes
module.exports.postRandomQuote = postRandomQuote
