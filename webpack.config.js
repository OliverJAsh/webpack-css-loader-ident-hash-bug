const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { MODE } = process.env;

module.exports = {
    plugins: [new MiniCssExtractPlugin()],
    mode: "production",
    entry: "./src/main.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    ...(MODE === "client" ? [MiniCssExtractPlugin.loader] : []),
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportOnlyLocals: MODE === "server",
                            },
                        },
                    },
                ],
            },
        ],
    },
};
