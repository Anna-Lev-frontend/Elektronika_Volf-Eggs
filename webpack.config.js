const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: { // webpack-dev-server, чтобы не обновлять постоянно страничку в браузере
        static: "./dist"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "audio", to: "audio" },
                { from: "img", to: "img" },
            ],
        }), new HtmlWebpackPlugin()
    ],
    devtool: 'inline-source-map',
    module: {// babel, для совместимости с разными браузерами 
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    }
};
