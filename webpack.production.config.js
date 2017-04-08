var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loaders: ['babel'],
                exclude: path.join(__dirname, 'node_modules')
            }, {
                test: /\.scss$/,
                loaders: [
                    'style', 'css', 'sass'
                ],
                include: path.join(__dirname, 'src/styles')
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loaders: ['file?name=courses/images/img-[hash:6].[ext]'],
                include: path.join(__dirname, 'src/images')
            }
        ]
    }
};
