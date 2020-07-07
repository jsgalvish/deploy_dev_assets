
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'samxlabs',
  applicationName: 'adlersuit-assets',
  appUid: '4gB0XtKBxrTF3ZZpMb',
  orgUid: '6HN8dhp5LpRY2bpjjd',
  deploymentUid: '200c65ee-ac61-4d9e-a914-70079a50a45e',
  serviceName: 'assets',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '3.6.12',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'assets-dev-uploadAssets', timeout: 6 };

try {
  const userHandler = require('./api/uploadassets.js');
  module.exports.handler = serverlessSDK.handler(userHandler.submit, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}