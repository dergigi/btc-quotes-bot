const Twit = require('twit')
const config = require('./config')
const quotes = require('./quotes.json')

const bot = new Twit(config)

function postRandomQuote() {
  // Pick a random quote
  var quote = quotes[Math.floor(Math.random()*quotes.length)]

  // Add author
  var quoteWithAuthor = "\"" + quote.body + "\" ― " + quote.author.name

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
    console.log("(Not posting quote to timeline. ENV var POST_TO_TWITTER has to be set to true.)")
  }
}

module.exports.quotes = quotes;
module.exports.postRandomQuote = postRandomQuote;
