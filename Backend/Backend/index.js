const express = require('express');

const bodyParser = require('body-parser')
const cors = require('cors');
const Routehandler = require(`./Routes/connect_mongo.js`);

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(`/`,Routehandler);

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log(`System is running on port ${PORT}.`);
});


index.js

