Package.describe({
  name: 'simonsimcity:client-session-timeout',
  version: '1.0.0',
  summary: 'Logs the user out if he was inactive on the client app for too long',
  git: 'https://github.com/SimonSimCity/meteor-client-session-timeout',
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.use('localstorage');
  api.use('accounts-base');
  api.mainModule('client-session-timeout.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('simonsimcity:client-session-timeout');
  api.mainModule('client-session-timeout-tests.js');
});
