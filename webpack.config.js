const path = require('path')


const output = {
  path: path.resolve(__dirname, '/build'),
  //publicPath: '/build/',
  filename: 'bundle.js'
}

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './client/index.js'),
  output,
  devServer: {
    static: {
      publicPath: '/build',
    },
    proxy: {
      '/': 'http://localhost:3000'
    }
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', `@babel/preset-react`]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
}