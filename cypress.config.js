const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
    /* chromeWebSecurity: false,
    chromeHeadless: false, */
    pageLoadTimeout: 90000,
  
    e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
  
 })

 

