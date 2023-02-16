require('dotenv').config()
// require library
const mongoose = require('mongoose');
// db url
const DB_URL = process.env.DB_URL || 'mongodb://localhost/todo_app_db';

mongoose.connect(DB_URL, { // create a connection to database server
    usenewurlparser: true,
    useunifiedtopology: true
});



// connect to database
const db = mongoose.connection;

// if error in connecting, print error
db.on('err', console.error.bind(console, "Error! \nCannot connect to Database todo_app_db"));

// else print connected
db.once('open', function () {
    console.log(DB_URL);
    console.log('Success! \nConnected to Database todo_app_db');
});

// export the db
module.exports = db;