const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:'./src/client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },
    module:{
        rules:[
            {
                test:'/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: '/\.html$/i',
                loader: 'html-loader',
                options:{
                    attributes: false,
                },
             },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./src/client/views/index.html",
            filename:"./index.html"
        }),
        new CleanWebpackPlugin({
            //Simulate the removal of files
            dry:true,
            //Write Logs to Console
            verbose: true,
            //Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets:true,
            protectWebpackAssets:false
        }),
    ]
};