const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "sourcemap",
    entry: {
        app: './src/index.js',
        product: './src/product.js',
        about: './src/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app.html',
            excludeChunks: ['about', 'product']
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            excludeChunks: ['about', 'app']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            excludeChunks: ['app', 'product']
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                common: {
                    test: /[\\/]vendor[\\/]/,
                    priority: -10
                },
                default: false
                // {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // }
            }
        }
    }
};