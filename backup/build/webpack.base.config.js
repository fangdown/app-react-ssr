const { resolve } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = config => {

    const baseConfig = {
        // 打包的入口文件
        entry: resolve('app/main.js'),
        // 打包的出口
        output: {
            path: resolve('dist'),
            publicPath: config.publicPath,
            // 入口文件生产的js
            filename: config.noHash ? 'js/[name].js' : 'js/[name].[chunkhash].js',
            // 非入口文件生产的js
            chunkFilename: config.noHash ? 'js/[name].js' : 'js/[name].[chunkhash].js'
        },
        // 配置各种loader
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: [resolve('node_modules')],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            plugins: [
                                "@babel/plugin-transform-runtime",
                                ["@babel/plugin-proposal-class-properties", { "loose": false }],
                            ]
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.css/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][local]-[hash:base64:5]'
                            },
                        },
                    ]
                },
                {
                    test: /\.less/,
                    include: [resolve('app')],
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][local]-[hash:base64:5]'
                            },
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: `url-loader?limit=1000&name=${config.imagePath}${config.noHash ? '[name].[ext]' : '[name].[hash:8]'}.[ext]`
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: `file-loader?name=${config.publicPath}fonts/${config.noHash ? '[name].[ext]' : '[name].[hash:8]'}.[ext]`
                },
            ]
        },
        resolve: {
            // 设置路径别名
            alias: {
                '@': resolve('app'),
            },
            // 文件后缀自动补全
            extensions: ['.js', '.jsx'],
        },
        // 第三方依赖，可以写在这里，不打包
        externals: {},
        plugins: [
            new MiniCssExtractPlugin({
                filename: config.noHash ? 'css/[name].css' : 'css/[name].[chunkhash].css',
            })
        ],
        optimization: {
            // 压缩css，由于配置css的压缩会覆盖默认的js压缩，所以js压缩也需要手动配置下
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    }

    return baseConfig;
}