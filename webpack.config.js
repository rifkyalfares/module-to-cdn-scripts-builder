var path = require('path');

module.exports = {
    resolve: {
      extensions: [".ts", ".js"],
    },
    entry: './src/index.ts',
    output: {
      filename: 'script-bundle.js',
      path: path.resolve(__dirname, "./dist"),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
      ],
    },
    mode: "production"
  };