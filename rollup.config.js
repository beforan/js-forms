import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const plugins = [babel({ ...pkg.babel, exclude: "node_modules/**" })];

const input = "src/index.js";

export default [
  // browser
  {
    input,
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd",
      sourcemap: true
    },
    plugins: [...plugins, terser()]
  },
  // commonjs, esm
  {
    input,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true
      }
    ],
    plugins
  }
];
