Package.describe({
    name: 'rolljee:bootstrap4',
    version: '0.0.2',
    summary: 'bootstrap4 packaged for Meteorjs',
    git: 'https://github.com/rolljee/rolljee-bootstrap4.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.addFiles([
        './css/bootstrap-grid.css',
        './css/bootstrap-reboot.css',
        './css/bootstrap.css',
        './js/bootstrap.js',
    ], 'client');
    api.use(['ecmascript']);
    api.versionsFrom('1.6.1.1');
    api.mainModule('bootstrap4.js');
});

Npm.depends({
    "jquery": "3.3.1",
    "popper.js": "1.14.3"
});