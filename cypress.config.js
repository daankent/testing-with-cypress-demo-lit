import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);

          return null;
        },
        table(message) {
          console.table(message);

          return null;
        },
      });
    },
  },
  includeShadowDom: true,
  component: {
    devServer: {
      framework: "cypress-ct-lit",
      bundler: "vite", // or 'webpack'
      // more config here
    },
  },
});
