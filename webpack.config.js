var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    entry: './src/entry.js',
  },
  output: {
    path: "build",
    publicPath: "build",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] }
      },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [commonsPlugin],
  resolve: {
    extensions: ['', '.js', '.json', '.less']
  }
};
