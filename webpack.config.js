var HTMLWebpackPlugin = require("html-webpack-plugin");

var config = {
    entry: __dirname + "/src/index.js",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    output: {
        filename: "app-transformed.js",
        path: __dirname + "/dist"
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html",
            inject: "body"
        })
    ]
};

module.exports = config;