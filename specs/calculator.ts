import { browser, by, element } from 'protractor';
describe('Calculator test', () => {
   
    beforeEach(function() {
        browser.get('https://juliemr.herokuapp.io/herokuapp-demo');
    })
   
    it('Launch url check', function() {
        expect(browser.getTitle()).toContain("Super");
    })

    it('Launch url check', function() {
        element(by.model('first')).sendKeys('12');
        element(by.model('second')).sendKeys('13');
        element(by.id('gobutton')).click();

    })
})