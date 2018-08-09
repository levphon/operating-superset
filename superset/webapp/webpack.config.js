var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './');
const BUILD_PATH = path.join(__dirname, '/public/');

var config = {
    entry: {
        /*app: [
            'webpack-dev-server/client?http://localhost:8000',
            'webpack/hot/only-dev-server',
            './app/index'
        ],*/
        app : './app/index',
        vendor: ['react','react-dom','react-router','jquery','metismenu','bootstrap','history']
    },
    devServer: {
        port:8000,
        host:'0.0.0.0',
        contentBase: path.join(__dirname, '/public/')
    },
    devtool: 'source-map',
    //devtool: 'eval',
    output: {
        path: BUILD_PATH,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': "jquery",
            'window.$': 'jquery'

        }),
        //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['common'],
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            "require.specified": "require.resolve"
        })
    ],
    module: {
        //noParse: [],
        loaders: [
            /*{
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app')
            },*/
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                    ],
                },
            },
            {
                test: /\.css$/,
                include: APP_DIR,
                loader: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};


module.exports = config;
