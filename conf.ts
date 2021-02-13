let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

import {Config, browser} from "protractor"

export let config: Config = {
    framework: "jasmine",
    capabilities:{
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--window-size=1024,768']
          
        }
    }, 

    specs:['./specs/non-auth/login-page.spec.js'],

    baseUrl: 'https://employee-web-qa.herokuapp.com/login',
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          }
        }));
      }
}