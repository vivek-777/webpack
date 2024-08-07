const path = require("path");

module.exports = {
  mode: false ? "development" : "production",
  entry: "./src/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
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
