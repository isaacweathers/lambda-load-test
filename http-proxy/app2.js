var http = require('http');
var _ = require('lodash');
var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

//
// http server
//
http.createServer(function(request, response) {
    var body = [];
    var url = request.url;
    request.on('error', function(err) {
        console.error(err);
    }).on('data', function(chunk) {
        body.push(chunk);
    }).on('end', function() {
        body = Buffer.concat(body).toString();

        response.on('error', function(err) {
            console.error(err);
        });

        var params = {
            FunctionName: 'test-dev-test'
        };
        var lambda = new AWS.Lambda();
        lambda.invoke(params, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = 500;
                response.write(JSON.stringify(err));
                response.end();
            } else {
                console.log(data);
                response.setHeader('Content-Type', 'application/json');
                response.statusCode = data.StatusCode;
                response.write(JSON.stringify(data));
                response.end();
            }
        });
    });
}).listen(3001);