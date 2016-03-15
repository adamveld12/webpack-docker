var config = require('./webpack.config.base.js')('development');

config.watchOptions = {
  poll: "6500"
};

module.exports = config;
