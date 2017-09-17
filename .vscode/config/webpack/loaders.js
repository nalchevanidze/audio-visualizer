const postcss = require("./postcss");

module.exports = [
    {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
            { loader: "babel" },
            { loader: "eslint" }
        ]
    },
    postcss
    ,
    //Files
    // {
    //     test: /\.(ttf|eot|woff|woff2)$/,
    //     loader: "url-loader",
    //     options: {
    //         limit: 50000,
    //         name: "./fonts/[name].[ext]"
    //     },
    // },
];