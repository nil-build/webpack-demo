const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "sourcemap",
    entry: {
        app: './src/index.js',
        about: './src/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app.html',
            excludeChunks: ['about']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            excludeChunks: ['app']
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};