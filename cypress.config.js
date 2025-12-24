import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "cypress-ct-lit",
      bundler: "vite", // or 'webpack'
      // more config here
    },
  },
});
