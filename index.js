// Please read  readme.txt first!

// require basic modules
const express = require('express');
const port =  process.env.PORT||  8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded());

// use static files(css,js,images)
app.use(express.static('./assets'));

// extract style and scripts from subpages into the layout 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// use layouts
app.use(expressLayouts);

// setting up the view engine - ejs
app.set('view engine','ejs');
app.set('views','./views');

// use express routers
app.use('/',require('./routes'));

// starting the app
app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}! \nCannot start the server on port ${port}`);
    }

    console.log(`Success! \nServer running on port ${port}`);
})