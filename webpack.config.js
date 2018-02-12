const webpack = require('webpack'),
      path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        // compress: true,
        port: 8000,
        // inline: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js|\.jsx$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }, 
            {
                test: /\.css$/,
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules'),
                ],
                use: [ 'style-loader', 'css-loader' ]
            },          
            {
                test: /\.tcss$/,
                include: path.join(__dirname, 'src/components'),
                use: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true
                        }
                    }
                ] 
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            }
        ]
    },
    resolve: {        
        extensions: ['.js', '.css', '.tsx', '.ts', '.scss', '.tcss', '/index.js', '/index.tsx', '/index.ts']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ]
};
