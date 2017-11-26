const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'index.js'
    },
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        port:8080,
        host:'localhost',
        // compress:true,
        inline:true,
        hot:true
    },
    module:{
        rules:[
            {test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-env']  //  presets:['es2015','react']以前的写法
                  }
                }
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}