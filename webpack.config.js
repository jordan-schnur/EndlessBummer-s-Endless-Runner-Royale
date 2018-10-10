const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');

module.exports = {
    mode: "development",
    entry: "./index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }      
            }
        ]
    },
    resolve:{
        alias: {
            'gl-matrix': path.join(__dirname,"./node_modules/gl-matrix"),
        },
    },
    devServer: {
        contentBase: path.join(__dirname, '/'),
        publicPath: "/",
        port: 8000,
        clientLogLevel: 'warning',
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}
