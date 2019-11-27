//const HtmlWebPackPlugin = require("html-webpack-plugin");
const { StatsWriterPlugin } = require("webpack-stats-plugin");

var path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: "babel-loader",
          options : {
            presets : [
              '@babel/preset-env',
              "@babel/preset-react"
            ]
          },
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ],
    
  },
  resolve: {
    

    alias: {
        'react': path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    }
  },
  externals: {
      'react': "commonjs react",
      'react-dom': "commonjs react-dom"
  },
  plugins: [
    new StatsWriterPlugin({
      fields: ["assets", "modules"]
    })
  ]
  
};