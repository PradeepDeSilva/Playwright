const { devices } = require('@playwright/test');

module.exports = {
    // Specify the test files to run
    testMatch: '**/tests/**/*.test.js',
    
    // Configuration options for browsers
    use: {
        // Use Chromium browser by default
        browserName: 'chromium',

        // Run in headed mode (visible browser window)
        headless: false,

        // Optionally, specify a list of devices to emulate
        // devices: [devices['iPhone 11 Pro Max']],
    },
};