var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: [
        path.resolve(__dirname, 'app/src/index')
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: '@babel/preset-react'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'app/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './app/build',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          title: 'koaProgram'
        })
    ]
}