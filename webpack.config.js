import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
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
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
};
