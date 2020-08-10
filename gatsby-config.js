require("@babel/register")({
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "current"
      }
    }],
    "@babel/preset-typescript"
  ],
  extensions: [".js", ".jsx", ".ts", ".tsx"],
});

module.exports = require("./gatsby-config.ts")