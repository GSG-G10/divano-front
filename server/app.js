require('env2')('.env');
const express = require('express');
const cookieParser = require('cookie-parser');
const { join } = require('path');
const router = require('./routes');

const app = express();

app.set('PORT', process.env.PORT || 4000);
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'public')));

app.use(router);

module.exports = app;
