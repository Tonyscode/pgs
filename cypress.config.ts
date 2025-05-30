const webpack = require("@cypress/webpack-preprocessor");

module.exports = {
  ...(on) => {
    const options = {
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: "ts-loader",
                  options: {
                    configFile: "tsconfig.json", // Укажи путь явно!
                  },
                },
              ],
            },
          ],
        },
      },
    };
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
