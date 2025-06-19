const BaseComponent = require ('../common/base.component');

class AddDoctorComponent extends BaseComponent {
    
    constructor() {
        super('.new-doctor-dialog.e-dlg-modal');
    }

    //this element will have more nested elements, so it is good to have its root
    
    /**
     * 
     * @param  name {'name' | 'phone' | 'email' | 'education'}
     * @returns 
     */

    input(name){
        const selectors = {
            name: '[name="Name"]',
            phone: '#DoctorMobile',
            email: '[name="Email"]',
            education: '[name="Education"]',
        }
        return this.rootEl.$(selectors[name.toLowerCase()]);
    }


    // submit button
    get submitBtn() {
        return this.rootEl.$('.button-container button.e-primary');
    }


    // close button / icon
    get closeBtn() {
        return this.rootEl.$('button.e-dlg-closeicon-btn');
    }

    /**
     * @param button {'submit' | 'close'}
     */

    async clickButton(button) {
        if (button.toLowerCase() === 'submit') {
            await this.submitBtn.click();
        }
        else if (button.toLowerCase() === 'close'){
            await this.closeBtn.click();
        }
    }

}

module.exports = AddDoctorComponent;

