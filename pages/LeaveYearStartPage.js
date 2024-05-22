// LeaveYearStartPage.js
class LeaveYearStartPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Leave Year Start Page is displayed
    async assertLeaveYearStartPage() {
        await this.page.waitForSelector('.govuk-fieldset__heading');
        const headingText = await this.page.textContent('.govuk-fieldset__heading');
        if (!headingText.includes('When does the leave year start?')) {
            throw new Error('Leave Year Start Page not displayed');
        }
        console.log('Visited the Leave Year Start Page');
    }

    // Enter the day for Leave Year Start Date
    async enterLeaveYearStartDay(day) {
        await this.page.fill('#response-0', day);
    }

    // Enter the month for Leave Year Start Date
    async enterLeaveYearStartMonth(month) {
        await this.page.fill('#response-1', month);
    }

    // Enter the year for Leave Year Start Date
    async enterLeaveYearStartYear(year) {
        await this.page.fill('#response-2', year);
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('div#current-question > .gem-c-button.gem-c-button--bottom-margin.govuk-button');
    }

    // Error validation when employment start date is earlier than leave year start date
    async errorValidationWhenEarlyEmploymentStartDateThanLeaveYearStartDate(expectedErrorMessage) {
        await this.page.waitForSelector('.govuk-form-group.govuk-form-group--error > .gem-c-error-message.govuk-error-message');
        const errorMessage = await this.page.textContent('.govuk-form-group.govuk-form-group--error > .gem-c-error-message.govuk-error-message');
        if (!errorMessage.includes(expectedErrorMessage)) {
            throw new Error('Expected error message not displayed');
        }
    }
}

module.exports = LeaveYearStartPage;
