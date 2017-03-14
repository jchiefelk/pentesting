/*****
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  //  devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,
    entry: {
        app: './src/client/App.jsx',
    },
   devServer: {
      port: 3000,
      historyApiFallback: true,
      contentBase: './',
      hot: true
    },    
    output: {
        path: './public',
        publicPath: '/',
        filename: '[name].js'
    },
   resolve: {
    extensions: ['', '.js', '.jsx','.css'],
    },
    module: {
        loaders: [
          {test: /\.jsx?$/,loader: 'babel-loader',exclude: /node_modules/}, 
          { test: /\.js/, loader: 'babel', exclude: /node_modules/ },
          {
              test: /(\.css|\.scss)$/,
              include: path.join(__dirname, 'node_modules'),
              loaders: ['style', 'css?sourceMap', 'sass?sourcMap']
          },
          {
              test: /(\.css|\.scss)$/,
              include: path.join(__dirname, 'src'),
              loaders: ['style', 'css?sourceMap', 'sass?sourcMap']
          }

        ]
    },
    node: { Buffer: false },

    plugins: [
      new webpack.optimize.DedupePlugin(),
      new ExtractTextPlugin('style.css', { allChunks: true }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
};
****/
/*eslint-disable no-var */



 module.exports = {
    context: __dirname + "/src",
    entry: './index.js',

    output: {
          filename: "bundle.js",
          path: __dirname + "/build",
    },

    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        { test: /\.css$/, loader: 'style!css' }
      ]
    },

    resolve: {
      extensions: ['', '.js', '.jsx','.css'],
    }

};

