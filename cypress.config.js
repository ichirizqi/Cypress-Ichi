const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/",
    //create variable
    env: {
      username: "Ichi"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5432,
    pageLoadTimeout: 100000
  },
});
