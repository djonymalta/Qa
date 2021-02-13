"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E2eLoginPage = void 0;
var protractor_1 = require("protractor");
var loginFormSelector = 'app-root app-login-page form';
var usernameInputSelector = loginFormSelector + " input[name=\"username\"]";
var passwordInputSelector = loginFormSelector + " input[name=\"password\"]";
var submitButtonSelector = loginFormSelector + " button[type=\"submit\"]";
var E2eLoginPage = /** @class */ (function () {
    function E2eLoginPage() {
    }
    E2eLoginPage.prototype.open = function () {
        protractor_1.browser.get('/login');
    };
    E2eLoginPage.prototype.quit = function () {
        protractor_1.browser.quit();
    };
    Object.defineProperty(E2eLoginPage.prototype, "loginForm", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(loginFormSelector));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(E2eLoginPage.prototype, "usernameInput", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(usernameInputSelector));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(E2eLoginPage.prototype, "passwordInput", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(passwordInputSelector));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(E2eLoginPage.prototype, "submitButton", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(submitButtonSelector));
        },
        enumerable: false,
        configurable: true
    });
    return E2eLoginPage;
}());
exports.E2eLoginPage = E2eLoginPage;
exports.default = E2eLoginPage;
