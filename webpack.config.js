const HtmlWebPackPlugin = require("html-webpack-plugin");       // index.html   자동생성, 첫 로딩 페이지
const { StatsWriterPlugin } = require("webpack-stats-plugin");    // 오류 통계 작성 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');   // Output 폴더 자동으로 지워줌

//const pkg = require('./package.json');
// const {
//   override,
//   addWebpackAlias,
// } = require("customize-cra");


var path = require('path');

// module.exports = override(
//   addWebpackAlias({
//     react: path.resolve('./node_modules/react')
//   })
// )
module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },

  // entry: {
  //   javascript: "./RenderMediaFile.js",
  //   html: "./index.html",
  // },
  performance: {
    maxEntrypointSize: 9000000,
    maxAssetSize: 9000000,
  },
  
  entry: './src/RenderMediaFileClass.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: "renderMediaFile",   // Important
    //libraryTarget: 'umd',   // Important
    libraryTarget: 'commonjs2',
    //umdNamedDefine: true   // Important
  },
  externals: {
    react: "react",
    //'react-dom': "react-dom",
  },
  // externals: [
  //   ...Object.keys(pkg.peerDependencies),
  //   ...Object.keys(pkg.dependencies)
  // ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //include: path.resolve(__dirname, 'src'),
        use: {
          loader: "babel-loader",
          // options : {
          //   presets : [
          //     '@babel/preset-env',
          //     "@babel/preset-react"
          //   ],
          //   plugins : ['@babel/plugin-proposal-object-rest-spread'],
          // },
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          }
        ]
      },
      // {
      //   test: "file?name=[name].[ext]",
      //   use: [
      //     {
      //       loader: "file-loader",
      //     }
      //   ]
      // }
    ],
    
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.css'],
    modules: [
      "node_modules"
    ],
    alias: {
        'react': path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    }
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups:{
        vendors: {
          enforce: true,
        }
      }
      //chunks: 'all',
    }
  },
 
  
  // optimization: {
  //   moduleIds: 'hashed',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       }
  //     }
  //   },
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new StatsWriterPlugin({
      title: '오류페이지 자동생성',
      fields: ["assets", "modules"],
    }),

  
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html",
    //   title: '로딩페이지 자동생성 모듈 with Caching',
    //   minify:{
    //     removeComments: true,
    //     minifyJS: true,
    //     minifyCSS: true,
    //     minifyURLs: true,
    //     collapseWhitespace: true,
    //     removeRedundantAttributes: true,
    //     useShortDoctype: true,
    //     removeEmptyAttributes: true,
    //     removeStyleLinkTypeAttributes: true,
    //     keepClosingSlash: true,
    //   }
    // }),
  ]
  
};