const twitStream = require('../model/Twitter');
const debug = require('debug')('app:twitterController:');

const cache = require('../libs/cache');

exports.enableSSE = async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });

    res.write(`data: ${JSON.stringify(cache.getCache())}\n\n`);

    twitStream.on('data', function (event) {
        if (event.retweeted_status) {
            res.write(`data: [${JSON.stringify(event.retweeted_status)}]\n\n`);
        }
    });

    twitStream.on('error', function (error) {
        debug.extend('enableSSE')(error);
        res.end();
    });
};
