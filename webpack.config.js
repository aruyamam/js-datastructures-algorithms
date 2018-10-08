const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const env = require('yargs').argv.env;

const libraryName = 'PacktDataStructuresAlgorithms';

const plugins = [];

let outputFile;

if (env === 'build') {
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

const config = {
  mode: 'development',
  entry: `${__dirname}/src/js/index.js`,
  devtool: 'source-map',
  output: {
    path: `${__dirname}/examples`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src/js')],
    extensions: ['.json', '.js'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  },
  devServer: {
    contentBase: __dirname,
  },
};

module.exports = config;
