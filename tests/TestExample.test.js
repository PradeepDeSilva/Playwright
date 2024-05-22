const { test } = require('@playwright/test');
const LandingPage = require('../pages/LandingPage');
const SelectIrregularHoursPage = require('../pages/SelectIrregularHoursPage');
const HolidayEntitlementBasedOnPage = require('../pages/HolidayEntitlementBasedOnPage');
const SelectFullOrPartOfYearForCalculationPage = require('../pages/SelectFullOrPartOfYearForCalculationPage');
const NumberOfDaysWorkedPerWeekPage = require('../pages/NumberOfDaysWorkedPerWeekPage');
const HolidayEntitlementResultsPage = require('../pages/HolidayEntitlementResultsPage');
const Data = require('../fixtures/TestData'); 


// *********************************************************************************************************************
// Test001 - Calculate Holiday Entitlement for Full Year with follwing options:
// Does the employee work irregular hours or for part of the year? No
// Is the holiday entitlement based on: days work per week
// Do you want to work out holiday: for a full leave year
// And entering number of days worked per week 
// *********************************************************************************************************************
test('Test001 - Calculate Holiday Entitlement for Full Year with follwing options:',async ({ page }) => {
    const landingPage = new LandingPage(page);
    await landingPage.navigateTo();
    // Click the Start button on Landing page
    await landingPage.clickStartButton();

    const selectIrregularHoursPage = new SelectIrregularHoursPage(page);
    await selectIrregularHoursPage.assertSelectIrregularHoursPage();
    
    // Select irregular hours as "No"
    await selectIrregularHoursPage.selectRegularHours();
    await selectIrregularHoursPage.submit();

    const holidayEntitlementBasedOnPage = new HolidayEntitlementBasedOnPage(page);
    await holidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();

    // Select 'days work per week'
    await holidayEntitlementBasedOnPage.selectDaysWorkPerWeek();
    await holidayEntitlementBasedOnPage.submit();

    const selectFullOrPartOfYearForCalculationPage = new SelectFullOrPartOfYearForCalculationPage(page);
    await selectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

    // Select the option 'for a full leave year'
    await selectFullOrPartOfYearForCalculationPage.selectForAFullLeaveYear();
    await selectFullOrPartOfYearForCalculationPage.submit(); 

    const numberOfDaysWorkedPerWeekPage = new NumberOfDaysWorkedPerWeekPage(page);
    await numberOfDaysWorkedPerWeekPage.assertNumberOfDaysWorkedPerWeekPage();
    
    // Enter number of days worked per week
    await numberOfDaysWorkedPerWeekPage.enterDaysWorkedPerWeek(Data.Test001NumberOfDaysWorkedPerWeek);
    await numberOfDaysWorkedPerWeekPage.submit();

    const holidayEntitlementResultsPage = new HolidayEntitlementResultsPage(page);
    await holidayEntitlementResultsPage.assertHolidayEntitlementResultsPage();

    // Assertion: Check if the page shows the expected holiday entitlement after continuing
    await holidayEntitlementResultsPage.assertExpactedHolidayEntitlement(Data.Test001ExpactedHolidays);

});
