var config = require('./webpack.config.js');

config.watchOptions = {
  poll: "6500"
};

module.exports = config;
