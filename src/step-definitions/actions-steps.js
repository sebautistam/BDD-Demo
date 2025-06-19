console.log('[DEBUG] actions-steps.js is loaded');

const { Given } = require('@wdio/cucumber-framework');  //creates a new Given object extracted from require(...)
const { pages } = require('../po'); // creates a new page object from object extracted from require(...)

//function with 2 argguments: Gerkin or RegEx, and a function to be executed when step definition is matched to an action in steps
Given ('I open {string} page', function(pageName) {
    return pages(pageName).open();
});

