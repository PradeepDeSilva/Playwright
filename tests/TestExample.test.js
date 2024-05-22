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
test('Test001 - Calculate Holiday Entitlement for Full Year with follwing options:', ({ page }) => {
    const landingPage = new LandingPage(page);
    landingPage.navigateTo();
    // Click the Start button on Landing page
     landingPage.clickStartButton();

    const selectIrregularHoursPage = new SelectIrregularHoursPage(page);
     selectIrregularHoursPage.assertSelectIrregularHoursPage();
    
    // Select irregular hours as "No"
     selectIrregularHoursPage.selectRegularHours();
     selectIrregularHoursPage.submit();

    const holidayEntitlementBasedOnPage = new HolidayEntitlementBasedOnPage(page);
    holidayEntitlementBasedOnPage.assertHolidayEntitlementBasedOnPage();

    // Select 'days work per week'
     holidayEntitlementBasedOnPage.selectDaysWorkPerWeek();
     holidayEntitlementBasedOnPage.submit();

    const selectFullOrPartOfYearForCalculationPage = new SelectFullOrPartOfYearForCalculationPage(page);
     selectFullOrPartOfYearForCalculationPage.assertSelectFullOrPartOfYearForCalculationPage();

    // Select the option 'for a full leave year'
     selectFullOrPartOfYearForCalculationPage.selectForAFullLeaveYear();
     selectFullOrPartOfYearForCalculationPage.submit(); 

    const numberOfDaysWorkedPerWeekPage = new NumberOfDaysWorkedPerWeekPage(page);
     numberOfDaysWorkedPerWeekPage.assertNumberOfDaysWorkedPerWeekPage();
    
    // Enter number of days worked per week
     numberOfDaysWorkedPerWeekPage.enterDaysWorkedPerWeek(Data.Test001NumberOfDaysWorkedPerWeek);
    numberOfDaysWorkedPerWeekPage.submit();

    const holidayEntitlementResultsPage = new HolidayEntitlementResultsPage(page);
     holidayEntitlementResultsPage.assertHolidayEntitlementResultsPage();

    // Assertion: Check if the page shows the expected holiday entitlement after continuing
     holidayEntitlementResultsPage.assertExpactedHolidayEntitlement(Data.Test001ExpactedHolidays);

});
