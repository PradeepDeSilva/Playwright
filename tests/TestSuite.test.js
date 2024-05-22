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
test('Test001 - Calculate Holiday Entitlement for Full Year with follwing options:', async ({ page }) => {
       // Navigate to Landing Page and click the Start button
       await new LandingPage(page).navigateTo().clickStartButton();

       // Select irregular hours as "No"
       await new SelectIrregularHoursPage(page).selectRegularHours().submit();
   
       // Select the option 'days work per week'
       await new HolidayEntitlementBasedOnPage(page).selectDaysWorkPerWeek().submit();
   
       // Select the option 'for a full leave year'
       await new SelectFullOrPartOfYearForCalculationPage(page).selectForAFullLeaveYear().submit();
   
       // Enter number of days worked per week
       await new NumberOfDaysWorkedPerWeekPage(page).enterDaysWorkedPerWeek(Data.Test001NumberOfDaysWorkedPerWeek).submit();
   
       // Assertion: Check if the page shows the expected holiday entitlement after continuing
       await new HolidayEntitlementResultsPage(page).assertHolidayEntitlementResultsPage().assertExpactedHolidayEntitlement(Data.Test001ExpactedHolidays);

});

