// NumberOfDaysWorkedPerWeekPage.js
class NumberOfDaysWorkedPerWeekPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Number Of Days Worked Per Week Page is displayed
    async assertNumberOfDaysWorkedPerWeekPage() {
        await this.page.waitForSelector('.gem-c-label.govuk-label.govuk-label--l');
        const labelText = await this.page.textContent('.gem-c-label.govuk-label.govuk-label--l');
        if (!labelText.includes('Number of days worked per week?')) {
            throw new Error('Number Of Days Worked Per Week Page not displayed');
        }
        console.log('Visited the Number Of Days Worked Per Week Page');
    }

    // Enter the number of days worked per week
    async enterDaysWorkedPerWeek(days) {
        await this.page.fill('#response', days);
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('button.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
}

module.exports = NumberOfDaysWorkedPerWeekPage;
