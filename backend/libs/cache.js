const twitStream = require('../model/Twitter');
const debug = require('debug')('app:cache');
/**
 * A simple queue based data structure providing the functionality of a cache
 * stores a maximum of 30 tweets within itself
 */
class Cache {
    constructor() {
        this.tweets = [];
    }

    /**
     * To add tweets within the cache
     * @param {string} tweet tweet to insert into the cache
     */
    enqueue(tweet) {
        if (this.tweets.length == 30) {
            this.tweets.shift();
            this.tweets.push(tweet);
        } else {
            this.tweets.push(tweet);
        }
    }

    /**
     * function to remove the oldest tweet within the cache
     */
    dequeue() {
        if (this.tweets.length == 0)
            return;
        this.tweets.shift();
    }

    /**
     * returns the tweets in the form of array
     * @returns  cached tweets
     */
    getCache() {
        return this.tweets;
    }

    clearCache() {
        this.tweets.length = 0;
    }
}

const cache = new Cache();

// keep updating the cache incase of new data
twitStream.on('data', function (event) {
    if (event.retweeted_status) {
        debug(event.retweeted_status);
        cache.enqueue(event.retweeted_status);
    }
});

module.exports = cache;
