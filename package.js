Package.describe({
  name: 'igoandsee:methods-coupons',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.2');
  api.use('ecmascript');
  api.mainModule('methods-coupons.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('methods-coupons');
  api.mainModule('methods-coupons-tests.js');
});
