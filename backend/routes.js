const router = require('express').Router();

const twitterController = require('./controllers/twitterController');

router.get('/subscribe-tweets', twitterController.enableSSE);

module.exports = router;
