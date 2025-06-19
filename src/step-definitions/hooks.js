const { Before } = require("@wdio/cucumber-framework");

//before, executed before a scenario, first one is object with several properties, ex: name
Before( {name: 'console log'}, () => {
    return console.log('before hook');
});

Before({name: 'console log for tags', tags: '@1'}, () => {
    return console.log('before hook for tag @1');
});