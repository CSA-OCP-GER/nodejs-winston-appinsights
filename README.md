# Example of using nodejs / winston logger in combination with Azure Application Insights

Clone this project to your local machine. Install dependencies via `npm install` in the root directory.

INFO: The following packages have been added:

```json
"dependencies": {
    "applicationinsights": "^1.0.2",
    "winston": "^2.4.1",
    "winston-azure-application-insights": "^1.3.0"
  }
```

Replace `YOUR_INSTRUMENTATION_KEY_FROM_APPINSIGHTS` in the file `app.js` with your AppInsights instrumentation key (line 5). (How to get it? https://github.com/Microsoft/ApplicationInsights-Home/wiki#getting-an-application-insights-instrumentation-key)

Run the application via `npm start`

Next, use Postman or a browser to create some requests (http://127.0.0.1:10010/hello?name=Scott) and after a few seconds, trace messages will be visible in your AppInsights instance in Azure.

Links:

https://www.npmjs.com/package/winston
https://www.npmjs.com/package/winston-azure-application-insights
https://www.npmjs.com/package/applicationinsights

Documentation for AppInsights can be found here:

https://docs.microsoft.com/en-us/azure/application-insights/app-insights-nodejs-quick-start
