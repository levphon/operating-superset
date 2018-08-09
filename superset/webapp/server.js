var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require("path");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: "public/",
	disableHostCheck:true
}).listen(8000, '0.0.0.0', function (error) {
        if (error) {
            return console.log(error);
        }
        console.log('Server running at http://localhost:8000/');
    });
