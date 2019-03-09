Package.describe({
  name: 'igoandsee:methods-coupons',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('igoandsee:coupons-collection');
  api.mainModule('methods-coupons.js', 'server');
});

Npm.depends({
  shortid: '2.2.8'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('methods-coupons');
  api.mainModule('methods-coupons-tests.js');
});
