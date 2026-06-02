const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  
  reporter: 'mochawesome',
  
  reporterOptions: 
  {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    reportTitle: 'Reporte de Tests Automatizados',
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },


    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 4000,
    pageLoadTimeout: 60000,
    
  
  },
});
