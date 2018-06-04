Package.describe({
  name: 'rolljee:bootstrap4',
  version: '0.0.1',
  summary: 'bootstrap4 packaged for Meteorjs',
  git: 'https://github.com/rolljee/rolljee-bootstrap4.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('ecmascript');
  api.mainModule('bootstrap4.js');
});
