const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    retries: {
      runMode: 3,
      openMode: 3,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
