const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  // entry: './src/index.js',
  entry: {
    app: "./src/index.js",
    product: "./src/product.js",
    about: "./src/about.js",
    news: "./src/news.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // 最新HtmlWebpackPlugin支持需求,无需修改插件代码
    // new HtmlWebpackPlugin({
    //     filename: 'main.html',
    //     chunks: (assests) => {
    //         console.log(assests)
    //         return [...assests['main'] || [], 'main'];
    //     }
    // }),
    new HtmlWebpackPlugin({
      filename: "app.html",
      chunks: ["app"],
      // chunks: ['app'],
      //excludeChunks: ['product', 'about'],
      // chunks: (assests) => {
      //     return [...assests['app'] || [], 'app'];
      // }
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      chunks: ["product"],
      // chunks: (assests) => {
      //     return [...assests['product'] || [], 'product'];
      // }
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      chunks: ["about"],
      // chunks: (assests) => {
      //     return [...assests['about'] || [], 'about'];
      // }
    }),
    new HtmlWebpackPlugin({
      filename: "news.html",
      chunks: ["news"],
      // chunks: (assests) => {
      //     return [...assests['about'] || [], 'about'];
      // }
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        commoncss: {
          test: /\.css$/,
          priority: -10,
        },
        common: {
          test: /[\\/]vendor[\\/]/,
          priority: -10,
        },
        default: false,
        // {
        //     minChunks: 2,
        //     priority: -20,
        //     reuseExistingChunk: true
        // }
      },
    },
  },
};
