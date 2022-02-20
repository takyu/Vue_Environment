const path = require("path");

const enabledSourceMap = process.env.NODE_ENV !== "production";

/**
 * Put plugins into variables
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: path.join(__dirname, "/src", "/js", "main.js"),

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "js/[name].bundle.js",
    publicPath: "auto",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: {
      app: {
        name: "Google Chrome",
        // arguments: ["--incognito", "--new-window"],
      },
    },
    port: 9999,
    hot: true,
    watchFiles: ["src/index.html"],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",

          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },

          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: [["autoprefixer", { grid: true }]],
              },
            },
          },

          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "/src", "index.html"),
      inject: "body",
      minify: false,
      scriptLoading: "blocking",
    }),

    new VueLoaderPlugin(),
  ],

  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
      // vue$: "vue/dist/vue.runtime.esm-bundler.js",
    },
  },
};
