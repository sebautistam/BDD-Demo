const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");

// creation of page, new page for each call of function
function pages (name) {
    const keyNamePage = name.toLowerCase();

    switch(keyNamePage) {
        case 'dashboard':
            return new DashboardPage();
        case 'doctors':
            return new DoctorsPage();
    }
}


module.exports = {
    DashboardPage,
    DoctorsPage,
    pages,
}