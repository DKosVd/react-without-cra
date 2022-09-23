const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new Dotenv()
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ["file-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        fallback: {
            "fs": false,
            "os": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
        }
    }
}