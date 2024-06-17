/*
 * @Author: 可以清心
 * @Description: webpack docs 配置文件
 * @Date: 2024-01-15 13:47:27
 * @LastEditTime: 2024-02-28 22:52:42
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");

const isProd = process.env.NODE_ENV === "production";

const webpackBaseConfig = {
    entry: path.resolve(__dirname, "../examples/main.ts"),
    output: {
        path: path.resolve(process.cwd(), "./docs"),
        publicPath: "/",
        filename: "[name].[contenthash:10].js",
        chunkFilename: "chunk.[id].js",
        assetModuleFilename: "[name].[contenthash:10][ext][query]",
        libraryExport: "default",
        // library: "BIRD", // libray 和 librayTarget 不能一起使用  see: https://github.com/webpack/webpack/issues/11800
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                    {
                        // 抽离公共样式变量给全局使用
                        // https://www.jianshu.com/p/13d9f18faafe
                        loader: "style-resources-loader",
                        options: {
                            patterns: [
                                path.resolve(
                                    __dirname,
                                    "../examples/src/assets/less/theme-variable.less"
                                ),
                                path.resolve(
                                    __dirname,
                                    "../packages/index.less"
                                )
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            {
                test: /\.(ttf|woff2?|otf)$/,
                type: "asset/resource"
            },
            {
                test: /\.(jsx|js)$/,
                include: [
                    path.resolve(__dirname, "../src"),
                    path.resolve(__dirname, "../packages"),
                    path.resolve(__dirname, "../examples")
                ],
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                    plugins: []
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    cacheDirectory: path.resolve(
                        __dirname,
                        "node_modules/.cache/vue-loader"
                    )
                }
            },
            {
                test: /\.md$/,
                use: [
                    "vue-loader",
                    {
                        loader: "markdown-loader",
                        options: {
                            path: path.resolve(
                                __dirname,
                                "../examples/src/demos"
                            )
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    compilerOptions: {
                        noEmit: false
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                include: [
                    path.resolve(__dirname, "../packages/icons"),
                    path.resolve(__dirname, "../examples/src/assets/svgs")
                ],
                options: {
                    symbolId: "svg-[name]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../examples/index.tpl"),
            filename: path.resolve(__dirname, "../docs/index.html"),
            favicon: path.resolve(__dirname, "../examples/favicon.ico")
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../vercel.json"),
                    to: path.resolve(__dirname, "../docs")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "css.[name].[contenthash:10].css"
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: "true",
            __VUE_PROD_DEVTOOLS__: "true"
        })
    ],
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserWebpackPlugin()],
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}`
        }
    },
    resolve: {
        extensions: [".vue", ".js", ".json", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "../examples/src")
        }
    },
    resolveLoader: {
        alias: {
            "markdown-loader": path.resolve(
                __dirname,
                "./loader/markdown.loader.js"
            )
        }
    },
    mode: process.env.NODE_ENV
};

const webpackDevConfig = {
    devServer: {
        host: "localhost",
        static: "./docs",
        port: 8080,
        hot: true,
        historyApiFallback: true
    },
    devtool: "source-map"
};

module.exports = isProd
    ? webpackBaseConfig
    : Object.assign(webpackBaseConfig, webpackDevConfig);
