const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        loader: 'eslint-loader',
        test: /\.ts$|\.tsx$/,
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: true,
          typeCheck: true,
          fix: true
        }
      },
      {
        loader: 'ts-loader',
        test: /\.ts$|\.tsx$/,
        exclude: [
          /node_modules/
        ],
        options: {
          configFile: "tsconfig.json"
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  serve: {
    content: path.resolve(__dirname, 'dist'),
    port: 8080,
  }
};
