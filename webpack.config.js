    const path = require('path');

    module.exports = {
        entry: {
            index: './src/index.js',
            print: './src/print.js',
        },  output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        ],
    },
    
    mode: 'development'
    };