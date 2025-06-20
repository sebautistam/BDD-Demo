const { Then } = require('@wdio/cucumber-framework');
const compareText = require ('./utils/compare-text')
const { pages } = require('../po'); 


//two strings, text and text to compare to
//function to compare
Then ('Page title should {string} {string}', async function(shouldBeParameter, titleText){
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText,shouldBeParameter)
});

Then (/^modal window should( not)? be displayed$/, async (notArg) => {
    let assert = expect(pages('doctors').addDoctor.rootEl);
    if (notArg) {
        assert = assert.not;
    }
    return assert.toBeDisplayed();
})