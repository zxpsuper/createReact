// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require("webpack");
const path = require("path");
const { resolve } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js", //入口
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          "style-loader",
          // "css-loader?modules", // 开启css in modules
          "css-loader", // 开启css in modules
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "../index.html")
    })
  ], // 插件
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": resolve("src")
    }
  }
};
