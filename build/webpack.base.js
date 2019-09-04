// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
const path = require('path');
const { resolve } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 使用happypack
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', //入口
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    // loader: 'babel-loader',
                    loader: 'happypack/loader?id=happyBabel',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    'style-loader',
                    // "css-loader?modules", // 开启css in modules
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        // 解决vender后面的hash每次都改变
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        }),
        new HappyPack({
            //用id来标识 happypack处理类文件
            id: 'happyBabel',
            //如何处理 用法和loader 的配置一样
            loaders: [
                {
                    loader: 'babel-loader?cacheDirectory=true',
                },
            ],
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        // 静态资源复制至生成的static文件夹
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*'],
            },
        ]),
    ], // 插件
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': resolve('src'),
        },
    },
};
