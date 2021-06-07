const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'app'),
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    externals: [nodeExternals()],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    name: 'server',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.BannerPlugin({ banner: 'require(\'source-map-support\').install();', raw: true, entryOnly: false}),
        new ESLintPlugin(),
    ],
    resolve: {
        extensions: ['.js'],
    },
    watch: false,
}
