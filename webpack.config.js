const path = require("path");

module.exports = (env) => {

    env = env || {};

    return {
        entry: './resources/js/src/ink-toner-search.js',
        output: {
            filename: "ink-toner-search" + (env.prod ? "-min" : "") + ".js",
            path: path.resolve(__dirname, './resources/js/dist')
        },
        mode: env.prod ? "production" : "development",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /node_modules/,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
            ]
        }
    }
};
