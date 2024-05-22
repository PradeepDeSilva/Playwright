// HolidayEntitlementBasedOnPage.js
class HolidayEntitlementBasedOnPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Holiday Entitlement Based On Page is displayed
    async assertHolidayEntitlementBasedOnPage() {
        await this.page.waitForSelector('.gem-c-radio__heading-text.govuk-fieldset__heading');
        const headingText = await this.page.textContent('.gem-c-radio__heading-text.govuk-fieldset__heading');
        if (!headingText.includes('Is the holiday entitlement based on:')) {
            throw new Error('Holiday Entitlement Based On Page not displayed');
        }
        console.log('Visited the Holiday Entitlement Based On Page');
    }

    // Select the option 'days work per week'
    async selectDaysWorkPerWeek() {
        await this.page.check('#response-0');
    }

    // Select the option 'hours worked per week'
    async selectHoursWorkedPerWeek() {
        await this.page.check('#response-1');
    }

    // Select the option 'annualised hours'
    async selectAnnualisedHours() {
        await this.page.check('#response-2');
    }

    // Select the option 'compressed hours'
    async selectCompressedHours() {
        await this.page.check('#response-3');
    }

    // Select the option 'shifts'
    async selectShifts() {
        await this.page.check('#response-4');
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('button.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
}

module.exports = HolidayEntitlementBasedOnPage;
