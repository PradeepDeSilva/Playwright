// SelectIrregularHoursPage.js
class SelectIrregularHoursPage {
    constructor(page) {
        this.page = page;
    }

    // Verify Select Irregular Hours page is loaded
    async assertSelectIrregularHoursPage() {
        await this.page.waitForSelector('#response-0');
        console.log('Visited the Select Irregular Hours page');
    }

    // Select employee has worked on irregular hours/ part of the year as 'Yes'
    async selectIrregularHours() {
        await this.page.check('#response-0');
    }

    // Select employee has worked on irregular hours/ part of the year as 'No'
    async selectRegularHours() {
        await this.page.check('#response-1');
    }

    // Click on 'Continue' button
    async submit() {
        await this.page.click('button.gem-c-button.govuk-button.gem-c-button--bottom-margin');
    }
}

module.exports = SelectIrregularHoursPage;