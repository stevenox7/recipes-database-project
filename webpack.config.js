const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      devServer: {
        host: 'localhost',
        port: 8080,
        // match the output path
        static: {
          directory: path.resolve(__dirname, 'dist'),
          // match the output 'publicPath'
          publicPath: '/',
        },
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        /**
         * proxy is required in order to make api calls to
         * express server while using hot-reload webpack server
         * routes api fetch requests from localhost:8080/api/* (webpack dev server)
         * to localhost:3000/api/* (where our Express server is running)
         */
        proxy: {
          '/insertRecipe': {
            target: 'http://localhost:3000/',
            secure: false,
          },
          // '/assets/**': {
          //   target: 'http://localhost:3000/',
          //   secure: false,
          // },
        },
      },
      
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]
   

}