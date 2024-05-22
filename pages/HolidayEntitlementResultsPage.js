// HolidayEntitlementResultsPage.js
class HolidayEntitlementResultsPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Holiday Entitlement Results Page is displayed
    async assertHolidayEntitlementResultsPage() {
        await this.page.waitForSelector('.gem-c-title__text.govuk-heading-xl');
        const pageTitle = await this.page.textContent('.gem-c-title__text.govuk-heading-xl');
        if (!pageTitle.includes('Information based on your answers')) {
            throw new Error('Holiday Entitlement Results Page not displayed');
        }
        console.log('Visited the Holiday Entitlement Summary Page');
    }

    // Verify expected holiday entitlement is displayed
    async assertExpactedHolidayEntitlement(expectedHolidayEntitlement) {
        await this.page.waitForSelector('.summary');
        const summaryText = await this.page.textContent('.summary');
        if (!summaryText.includes(expectedHolidayEntitlement)) {
            throw new Error('Expected holiday entitlement not displayed');
        }
    }
}

module.exports = HolidayEntitlementResultsPage;
