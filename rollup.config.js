import html from "@web/rollup-plugin-html";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/index.html",
  output: { dir: "dist" },
  plugins: [
    html(),
    resolve(), // Resolve bare module specifiers to relative paths

    terser({
      // Minify JS
      ecma: 2020,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
  ],
};
