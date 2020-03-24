const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./database/DB');
    orderRoute=require('../backend/routes/order.route');
    shippingRoute=require('../backend/routes/shipping.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/orders',orderRoute);

app.use('/shipping',shippingRoute);


const port = process.env.PORT || 4000;
const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});