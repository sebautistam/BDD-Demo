const { When, Given } = require('@wdio/cucumber-framework');  //creates a new Given object extracted from require(...)
const { pages } = require('../po'); // creates a new page object from object extracted from require(...)

//function with 2 argguments: Gerkin or RegEx, and a function to be executed when step definition is matched to an action in steps
Given ('I open {string} page', function(pageName) {
    return pages(pageName).open();
});

When ('I click {string} link from the side menu', function(link){
    return pages('dashboard').sideMenu.item(link).click();
});

When ('I click add new doctor button from list header', function(){
    return pages('doctors').doctorListHeader.addNewDoctorBtn.click();
});

When ('I click {string} button in the modal window', function(button){
    return pages('doctors').addDoctor.clickButton(button);
});
