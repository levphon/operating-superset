const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

// input dir
const APP_DIR = path.resolve(__dirname, './');

// output dir
//const BUILD_DIR = path.resolve(__dirname, './dist');
const BUILD_DIR = path.resolve(__dirname, '../static/assets/dist');

const config = {
  node: {
    fs: 'empty',
  },
  devtool: 'source-map',
  entry: {
    theme: APP_DIR + '/src/theme.js',
    common: APP_DIR + '/src/common.js',
    addSlice: ['babel-polyfill', APP_DIR + '/src/addSlice/index.jsx'],
    explore: ['babel-polyfill', APP_DIR + '/src/explore/index.jsx'],
    dashboard: ['babel-polyfill', APP_DIR + '/src/dashboard/index.jsx'],
    sqllab: ['babel-polyfill', APP_DIR + '/src/SqlLab/index.jsx'],
    welcome: ['babel-polyfill', APP_DIR + '/src/welcome/index.jsx'],
    profile: ['babel-polyfill', APP_DIR + '/src/profile/index.jsx'],
    echarts:[APP_DIR + '/src/echarts/index.js'],
  },
  /*output: {
    path: BUILD_DIR,
    filename: '[name].[chunkhash].entry.js',
    chunkFilename: '[name].[chunkhash].entry.js',
    publicPath: 'http://127.0.0.1:8080/static/dist/'
  },*/
  output: {
    path: BUILD_DIR,
    filename: '[name].entry.js',
    chunkFilename: '[name].entry.js'
  },
  devServer: {
    port:9090,
    host:'0.0.0.0',
    contentBase: path.join(__dirname, '../static/assets/dist/')
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      webworkify: 'webworkify-webpack',
    },

  },
  module: {
    loaders: [
    //rules: [
      {
        test: /datatables\.net.*/,
        loader: 'imports-loader?define=>false',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
          ],
        },
      },
      // Extract css files
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader',
        }),
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader',
        }),
      },
      /* for css linking images */
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.gif$/,
        loader: 'file-loader',
      },
      /* for font-awesome */
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
    new ManifestPlugin(),
    //new CleanWebpackPlugin(['dist']),
    /*new CleanWebpackPlugin(['dist','images'],{
                root: path.resolve(__dirname, '../static/assets/'),
                verbose: true,
                dry: false
            }),*/
    /*new CleanWebpackPlugin(['dist'],{
                root: path.resolve(__dirname, '../static/assets/'),
                verbose: true,
                dry: false
            }),*/
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
      new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'images/**/*'),
        to: path.resolve(__dirname, '../static/assets/'), force: true }]),
      new webpack.HotModuleReplacementPlugin(),
  ],
};
if (process.env.NODE_ENV === 'production') {
  // Using settings suggested in https://github.com/webpack/webpack/issues/537
  const UJSplugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    minimize: true,
    parallel: {
      cache: true,
      workers: 4,
    },
    compress: false,
  });
  config.plugins.push(UJSplugin);
}
module.exports = config;
