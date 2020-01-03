const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const debug = require('debug')('app:');
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(compression());

const router = require('./routes');

const PORT = process.env.PORT || 5000;

app.use('/api', router);

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`);
});
