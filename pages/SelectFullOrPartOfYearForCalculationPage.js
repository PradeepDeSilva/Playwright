// SelectFullOrPartOfYearForCalculationPage.js
class SelectFullOrPartOfYearForCalculationPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Select Full Or Part Of Year For Calculation Page is displayed
    async assertSelectFullOrPartOfYearForCalculationPage() {
        await this.page.waitForSelector('.gem-c-radio__heading-text.govuk-fieldset__heading');
        const headingText = await this.page.textContent('.gem-c-radio__heading-text.govuk-fieldset__heading');
        if (!headingText.includes('Do you want to work out holiday:')) {
            throw new Error('Select Full Or Part Of Year For Calculation Page not displayed');
        }
        console.log('Visited the page to select full Or part of year for calculation');
    }

    // Select the option 'for a full leave year'
    async selectForAFullLeaveYear() {
        await this.page.check('#response-0');
    }

    // Select the option 'for someone starting part way through leave year'
    async selectStartingPartWayThrough() {
        await this.page.check('#response-1');
    }

    // Select the option 'for someone leaving part way through leave year'
    async selectLeavingPartWayThrough() {
        await this.page.check('#response-2');
    }

    // Select the option 'for someone starting and leaving part way through a leave year'
    async selectStartingAndLeavingPartWayThrough() {
        await this.page.check('#response-3');
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('button.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
}

module.exports = SelectFullOrPartOfYearForCalculationPage;
