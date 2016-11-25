var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lambda_http_proxy = require('lambda-http-proxy');
var _ = require('lodash');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('*', function(req, res, next) {
	if (!_.isNil(req.query.node)) {
		res.json({node: true});
	} else if (_.isNil(req.query.ec2_timeout)) {
        lambda_http_proxy.invoke(req, res, next);
    } else {
        setTimeout(function() {
            lambda_http_proxy.invoke(req, res, next);
        }, _.toNumber(req.query.ec2_timeout));
    }
});

app.set('port', 3000);
app.listen(app.get('port'));
module.exports = app;