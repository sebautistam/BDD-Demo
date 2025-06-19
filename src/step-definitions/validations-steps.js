const { Then } = require('@wdio/cucumber-framework');
const compareText = require ('./utils/compare-text')


//two strings, text and text to compare to
//function to compare
Then('Page title should {string} {string}', async function(shouldBeParameter, titleText){
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText,shouldBeParameter)
});