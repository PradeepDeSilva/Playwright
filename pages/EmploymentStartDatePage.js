// EmploymentStartDatePage.js
class EmploymentStartDatePage {
    constructor(page) {
        this.page = page;
    }

    // Verify Employment Start Date Page is displayed
    async assertEmploymentStartDatePage() {
        await this.page.waitForSelector('.govuk-fieldset__heading');
        const headingText = await this.page.textContent('.govuk-fieldset__heading');
        if (!headingText.includes('What was the employment start date?')) {
            throw new Error('Employment Start Date Page not displayed');
        }
        console.log('Visited the Employment Start Date Page');
    }

    // Enter the day for Employment Start Date
    async enterEmploymentStartDay(day) {
        await this.page.fill('#response-0', day);
    }

    // Enter the month for Employment Start Date
    async enterEmploymentStartMonth(month) {
        await this.page.fill('#response-1', month);
    }

    // Enter the year for Employment Start Date
    async enterEmploymentStartYear(year) {
        await this.page.fill('#response-2', year);
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('div#current-question > .gem-c-button.gem-c-button--bottom-margin.govuk-button');
    }
}

module.exports = EmploymentStartDatePage;
