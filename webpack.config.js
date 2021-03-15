const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        main: "./index.js",
        analytics: "./analytics.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
                patterns: [
                    {from: path.resolve(__dirname, "src/favicon.ico"), to: path.resolve(__dirname, "dist")}
                ]
            }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [{loader: MiniCssExtractPlugin.loader, options: {}}, "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: [{loader: MiniCssExtractPlugin.loader, options: {}}, "css-loader"]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.ttf$/,
                use: ["file-loader"]
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    }
}