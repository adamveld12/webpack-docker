var config = require('./webpack.config.base.js');

config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }));

module.exports = config;
