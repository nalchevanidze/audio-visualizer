module.exports = {
    devServer: {
        contentBase: "./public",
        hot: true,
        port: 8080,
        historyApiFallback: true
    },
    entry: {
        app: "./preview.tsx"
    },
    output: {
        filename: "public/[name].js"
    },
    devtool: "source-map",
    resolveLoader: {
        moduleExtensions: ["-loader"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: [".js", "jsx", ".ts", ".tsx"]
    },

    mode:"development"
};
