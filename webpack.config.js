const path = require('path');
const merge = require('webpack-merge');

const TSRule = {
  test: /\.ts$/,
  exclude: /node_modules/,
  use: [{ loader: 'babel-loader' }],
};

const commonConfig = {
  entry: {
    app: './index.ts',
  },
  module: {
    rules: [TSRule],
  },
  resolve: {
    extensions: ['.ts'],
  },
  mode: 'production',
  optimization: {
    sideEffects: false,
  },
};

const webBundle = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'web.bundle.js',
    library: 'Turkish',
    libraryTarget: 'window',
    libraryExport: 'default',
  },
});

const npmPackage = merge(commonConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'common.bundle.js',
    library: 'Turkish',
    libraryTarget: 'commonjs2'
  },
});

module.exports = [webBundle, npmPackage];
