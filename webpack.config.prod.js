import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

import webpack from "webpack";
const {CleanPlugin} = webpack;

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CleanPlugin()
  ]
};
