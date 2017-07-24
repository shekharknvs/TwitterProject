var webpack = require('webpack');

module.exports = {
    devtool:'cheap-module-source-map',
    entry: [
        './src/main.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader'],
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        //  new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        hot:false,
        historyApiFallback: true,
        contentBase: './',
        host:'shekhar',
        port:8080,
    }
};
