const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [path.join(__dirname, 'src/gql/handler_local.js')],
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ['node_modules', 'build/*'],
    },
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
    },
    externals: [],
    plugins: [
        new CleanWebpackPlugin(),
    ],
    target: 'node',
    module: {
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
            }
        ]
    }
};