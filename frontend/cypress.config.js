const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.FRONTEND,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
})
