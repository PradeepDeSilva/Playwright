class EmploymentEndDatePage {
    constructor(page) {
        this.page = page;
    }

    // Verify Employment End Date Page is displayed
    async assertEmploymentEndDatePage() {
        await this.page.waitForSelector('.govuk-fieldset__heading');
        const headingText = await this.page.textContent('.govuk-fieldset__heading');
        if (!headingText.includes('What was the employment end date?')) {
            throw new Error('Employment End Date Page not displayed');
        }
        console.log('Visited the Employment End Date Page');
    }

    // Enter the day for Employment End Date
    async enterEmploymentEndDay(day) {
        await this.page.fill('#response-0', day);
    }

    // Enter the month for Employment End Date
    async enterEmploymentEndMonth(month) {
        await this.page.fill('#response-1', month);
    }

    // Enter the year for Employment End Date
    async enterEmploymentEndYear(year) {
        await this.page.fill('#response-2', year);
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('div#current-question > .gem-c-button.gem-c-button--bottom-margin.govuk-button');
    }
}

module.exports = EmploymentEndDatePage;
