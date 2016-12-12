'use strict';
var _ = require('lodash');

module.exports.test = (event, context, callback) => {

  var timeout = null;
  if (!_.isNil(event.query) && !_.isNil(event.query.timeout))
    timeout = event.query.timeout;
  else if (!_.isNil(event.queryStringParameters) && !_.isNil(event.queryStringParameters.timeout))
    timeout = event.queryStringParameters.timeout;

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      timeout: timeout
    })
  };

  if (_.isNil(timeout)) {
    callback(null, response);
  } else {
    setTimeout(function() {
      callback(null, response);
    }, _.toNumber(timeout));
  }
};
