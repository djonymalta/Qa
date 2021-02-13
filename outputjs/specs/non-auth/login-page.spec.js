"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var configAuth_1 = require("./../../configurations/configAuth");
//import e2eAuthCollection from ''
var login_page_po_1 = require("./login-page.po");
var login_page_po_2 = require("./../private/login-page.po");
describe('Login Page', function () {
    var page = new login_page_po_1.E2eLoginPage();
    var item = new login_page_po_2.E2ePrivateArea();
    beforeEach(function () {
        page.open();
    });
    it('should display login form', function () {
        // given
        var loginFormEl = page.loginForm;
        // when
        var isPresent = loginFormEl.isPresent();
        // then
        expect(isPresent).toBeTruthy();
    });
    it('should display submitButton', function () {
        // given
        var submitButtonEl = page.submitButton;
        // when
        var isPresent = submitButtonEl.isPresent();
        // then
        expect(isPresent).toBeTruthy();
    });
    it('should display usernameInput', function () {
        // given
        var usernameInputEl = page.usernameInput;
        // when
        var isPresent = usernameInputEl.isPresent();
        // then
        expect(isPresent).toBeTruthy();
    });
    it('should display passwordInput', function () {
        // given
        var passwordInputEl = page.passwordInput;
        // when
        var isPresent = passwordInputEl.isPresent();
        // then
        expect(isPresent).toBeTruthy();
    });
    it('should disable submit button while form is empty', function () {
        // given
        var sibmitButtonEl = page.submitButton;
        // when
        var disable = sibmitButtonEl.getAttribute('disabled');
        // then
        expect(disable).toBeTruthy();
    });
    it('should disable the submit button when the username field has no value', function () {
        // when
        var disabled = page.submitButton.getAttribute('disabled');
        // then
        expect(disabled).toBeTruthy();
    });
    it('should disable the submit button when the password field has no value', function () {
        // when
        var disabled = page.submitButton.getAttribute('disabled');
        // then
        expect(disabled).toBeTruthy();
    });
    it('should enable submit button while form is valid', function () {
        // given
        var login = page.usernameInput;
        var password = page.passwordInput;
        var submitButton = page.submitButton;
        // when
        login.sendKeys('djony.xavier@levecapital.com.br');
        password.sendKeys('Cheir0@2019');
        var disabled = submitButton.getAttribute('disabled');
        // then
        expect(disabled).toBeTruthy();
    });
    it('should leave login page after successfull login', function () {
        // given 
        var login = page.usernameInput;
        var password = page.passwordInput;
        var submitButton = page.submitButton;
        var imagem = item.imgNavBar;
        // when 
        var urltemp = protractor_1.browser.getCurrentUrl();
        login.sendKeys(configAuth_1.e2eAuthCollection.validUser);
        password.sendKeys(configAuth_1.e2eAuthCollection.password);
        // expect(submitButton.isPresent());
        submitButton.click();
        protractor_1.browser.wait(urltemp, 9 * 2000, 'wait change url');
        var url = protractor_1.browser.getCurrentUrl();
        // then
        expect(url).not.toContain('/login');
    });
    afterAll(function () {
        // page.quit();
    });
});
