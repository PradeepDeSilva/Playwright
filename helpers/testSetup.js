async function setup() {
    // Visit landing page
    await LandingPage.visit();

    // Click Start Now button
    await LandingPage.clickStartNow();

    // Verify Select Irregular Hours Page is displayed
    await SelectIrregularHoursPage.assertSelectIrregularHoursPage();

    // Load test data from fixture
    const data = require('../TestData.json'); 
    global.Data = data; // Assigning test data to a global variable for use in tests
}

module.exports = { setup };


