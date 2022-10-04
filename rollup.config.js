import scss from "rollup-plugin-scss";

export default {
  input: "./index.js",
  output: {
    file: "./web/main.min.js",
    format: "esm",
  },
  plugins: [
    scss({
      include: ["*.scss"],
      output: "web/styles.css",
      failOnError: true,
    }),
  ],
};
