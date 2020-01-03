const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const twitStream = client.stream('statuses/filter', {
    track: 'traveloka',
    result_type: 'retweet'
});

twitStream.setMaxListeners(0);
module.exports = twitStream;
