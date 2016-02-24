var config = require('./webpack.config.base.js');

config.watchOptions = {
  poll: "6500"
};

config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }));

module.exports = config;
