const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const usersRouter = require('./routes/users');
const configurationRouter = require('./routes/configurations');

const app = express();

const db = require ('./helpers/db/db');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/configurations', configurationRouter);
module.exports = app;
