const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const plugins = [];
const externals = [];
const entry = [path.join(__dirname, 'src/gql/handler_local.js')];

if (process.env.NODE_ENV === 'development') {
    plugins.push(new CleanWebpackPlugin());
}

module.exports = {
    entry: entry,
    watch: process.env.NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: ['node_modules', 'dist/*'],
    },
    mode: process.env.NODE_ENV,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: externals,
    plugins: plugins,
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