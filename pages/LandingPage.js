
// LandingPage.js
class LandingPage {
     constructor(page) {
        this.page = page;
    }

    // Visit Calculate holiday entitlement page(Landing page)
    async navigateTo() {
        await this.page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    }

    // Click the Start button on Landing page
    async clickStartButton(selector) {
        await this.page.click("article[role='article']  a[role='button']");
    }

}

module.exports = LandingPage;