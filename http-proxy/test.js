var async = require('async');
var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
var winston = require('winston');
var _ = require('lodash');

var all_now = new Date();
var sum = 0;
async.times(process.argv[2], function(n, next) {
    var lambda = new AWS.Lambda();
    var now = new Date();
    lambda.invoke({FunctionName: 'test-dev-test'}, function(err, data) {
        var end = new Date();
        sum += (end.getTime() - now.getTime());
        next(err, data);
    });
}, function(err, datas) {
    var all_end = new Date();
    var avg = sum / datas.length;
    winston.info(datas.length + ' - ' + (all_end.getTime() - all_now.getTime()) + ' - ' + avg);
});