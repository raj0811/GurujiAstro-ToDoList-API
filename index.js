const express = require('express');
const bodyParser = require('body-parser')


const app = express();
const port = 8000;
const db = require('./config/mongoose');


app.use(bodyParser.json());
app.use(express.json());
const passportJWT = require('./config/passport-JWT');
const passport = require('passport')
const User = require('./models/user')


app.use(express.urlencoded());

app.use('/', require('./routes'));


app.listen(port, function (err) {
    if (err) { console.log("error in starting server"); }

    console.log('Server starting on port no ', port);

})