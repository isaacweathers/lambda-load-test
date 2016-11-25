'use strict';
var _ = require('lodash');

module.exports.test = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  };

  if (_.isNil(event) || _.isNil(event.query) || _.isNil(event.query.timeout)) {
    callback(null, response);
  } else {
    setTimeout(function() {
      callback(null, response);
    }, _.toNumber(event.query.timeout));
  }
};
