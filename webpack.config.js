const path = require("path");

module.exports = {
  mode: false ? "development" : "production",
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3500,
  },
};
