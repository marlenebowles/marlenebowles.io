const withTM = require('next-transpile-modules');

module.exports = withTM({
	transpileModules: ['@computapars/*'],
	target: 'serverless',
});
