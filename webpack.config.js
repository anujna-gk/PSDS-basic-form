// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.mjs', '.cjs', '.css'],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: (resourcePath) => {
                                    if (resourcePath.includes('@pluralsight/ps-design-system')) {
                                        return "global";
                                    }
                                    return "local";
                                }
                            }
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(?:js|mjs|cjs|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [],
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ]
                        ],
                        include: ['src/**/*'],
                        ignore: ['**/*.d.ts']
                    }
                }
            },
            {
                test: /\.svg$/,
                use: 'svg-react-loader'
            },
            {
                test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'psds',
            template: path.join(__dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ],

    devServer: {
        static: path.join(__dirname, "public"),
        port: 3000,
        open: true,
    },
};