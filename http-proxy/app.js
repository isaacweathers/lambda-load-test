var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lambda_http_proxy = require('../index');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('/api', lambda_http_proxy.invoke);

app.set('port', 3000);
module.exports = app;