const path = require("path");

module.exports = {
  mode: false ? "development" : "production",
  entry: "./src/App.js",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3600,
  },
  //loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
