const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const fs = require('fs');
const path = require('path');

async function generateReport() {
  try {
    // 1. Merge de todos los archivos JSON
    const jsonReport = await merge({
      files: ['cypress/reports/mochawesome*.json'],
      reportDir: 'cypress/reports',
    });
    
    // 2. Generar reporte HTML
    await generator.create(jsonReport, {
      reportDir: 'cypress/reports/final-report',
      reportFilename: 'index',
      reportTitle: 'Reporte de Automatización',
      showPassed: true,
      showFailed: true,
      showPending: true,
      showSkipped: false,
      charts: true,
      inlineAssets: true,
      saveJson: true,
      autoOpen: false,
      overwrite: true,
      timestamp: new Date().toISOString(),
    });
    
    console.log('✅ Reporte generado exitosamente en: cypress/reports/final-report');
  } catch (error) {
    console.error('❌ Error generando reporte:', error);
    process.exit(1);
  }
}

generateReport();