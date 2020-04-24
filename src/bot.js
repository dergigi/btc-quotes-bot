const Twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')

const bot = new Twit(config)

const WHITEPAPER_URL = 'https://bitcoin.org/bitcoin.pdf'
const BITCOINTALK_URL = 'https://satoshi.nakamotoinstitute.org/posts/bitcointalk/'
const EMAIL_URL = 'https://satoshi.nakamotoinstitute.org/emails/cryptography/'
const P2PFOUNDATION_URL = 'https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/'


function postRandomQuote() {
  // Pick a random quote
  var quote = quotes[Math.floor(Math.random()*quotes.length)]

  // Sanitze quote (remove double spaces)
  var sanitizedQuote = sanitizeQuote(quote)

  // Reduce length of quote to fit twitter
  var tweetableQuote = shortenQuote(sanitizedQuote)

  // Post quote to twitter
  postQuote(tweetableQuote)
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
    console.log("(Not posting quote to timeline. ENV var POST_TO_TWITTER has to be set to true.)")
  }
}

module.exports.quotes = quotes;
module.exports.postRandomQuote = postRandomQuote;
