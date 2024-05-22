// NumberOfHoursWorkedPerWeekPage.js
class NumberOfHoursWorkedPerWeekPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Number Of Hours Worked Per Week Page is displayed
    async assertNumberOfHoursWorkedPerWeekPage() {
        await this.page.waitForSelector('.gem-c-label.govuk-label.govuk-label--l');
        const labelText = await this.page.textContent('.gem-c-label.govuk-label.govuk-label--l');
        if (!labelText.includes('Number of hours worked per week?')) {
            throw new Error('Number Of Hours Worked Per Week Page not displayed');
        }
        console.log('Visited the Number Of Hours Worked Per Week Page');
    }

    // Enter the number of hours worked per week
    async enterHoursWorkedPerWeek(hours) {
        await this.page.fill('#response', hours);
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('button.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
}

module.exports = NumberOfHoursWorkedPerWeekPage;
