"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--window-size=1024,768']
        }
    },
    specs: ['./specs/non-auth/login-page.spec.js'],
    baseUrl: 'https://employee-web-qa.herokuapp.com/login',
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    }
};
