'use strict';
var appInsights = require('applicationinsights');

appInsights
  .setup('YOUR_INSTRUMENTATION_KEY_FROM_APPINSIGHTS')
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .setAutoCollectConsole(true)
  .setUseDiskRetryCaching(true)
  .start();

var winston = require('winston');
var aiLogger = require('winston-azure-application-insights').AzureApplicationInsightsLogger;

winston.add(aiLogger, {insights: appInsights});

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

// Test winston
app.use('/', function (req, res, next) {
  winston.log('info', 'Info message from winston!', {
    prop1: 'Custom data 1',
    prop2: 'Custom data 2'
  });
  next();
});

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
