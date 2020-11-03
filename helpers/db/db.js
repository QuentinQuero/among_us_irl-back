'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const mongoUri = `mongodb://${process.env.dbhost}:${process.env.dbport}/${process.env.dbname}`;

mongoose.connect(mongoUri, options)
    .then(() => { console.log('successfully connected to the database')})
    .catch(err => {console.log(`error connecting to the database: ${err}`)});