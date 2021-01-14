if (process.env.POST_TO_MASTODON) {
    console.log('Posting on mastodon')
    const mastodon = require('./src/bot-mastodon')
    mastodon.postRandomQuote()
} else {
    console.log('Bot not activated for mastodon')
}

if (process.env.POST_TO_TWITTER) {
    console.log('Posting on twitter')
    const twitter = require('./src/bot-twitter')
    twitter.postRandomQuote()
} else {
    console.log('Bot not activated for twitter')
}
