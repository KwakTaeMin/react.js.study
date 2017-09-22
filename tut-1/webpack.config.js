var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot : true, // file이 수정될 떄 마다 reload
        inline: true, // bundle에 같이 넣어준느것
        // host : '0.0.0.0'
        port: 4000,
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                          cacheDirectory: true,
                          presets: ['es2015', 'react']
                    })],
                    exclude: /node_modules/

                }
            ]
        },
    plugins : [
       new webpack.HotModuleReplacementPlugin()
   ]
};
