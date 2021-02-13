"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.E2ePrivateArea = void 0;
var protractor_1 = require("protractor");
var navbar = 'app-root app-wrapper-private lc-app-container lc-app-container-top ';
var imgLogoNavbar = navbar + " img[src=\"https://leve-assets.s3-sa-east-1.amazonaws.com/images/logo.png\"]";
var passwordInputSelector = navbar + " input[name=\"password\"]";
var submitButtonSelector = navbar + " button[type=\"submit\"]";
var E2ePrivateArea = /** @class */ (function () {
    function E2ePrivateArea() {
    }
    E2ePrivateArea.prototype.open = function () {
        protractor_1.browser.get('/login');
    };
    E2ePrivateArea.prototype.quit = function () {
        protractor_1.browser.quit();
    };
    Object.defineProperty(E2ePrivateArea.prototype, "loginForm", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(navbar));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(E2ePrivateArea.prototype, "imgNavBar", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(navbar));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(E2ePrivateArea.prototype, "passwordInput", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(passwordInputSelector));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(E2ePrivateArea.prototype, "submitButton", {
        get: function () {
            return protractor_1.element(protractor_1.by.css(submitButtonSelector));
        },
        enumerable: false,
        configurable: true
    });
    return E2ePrivateArea;
}());
exports.E2ePrivateArea = E2ePrivateArea;
exports.default = E2ePrivateArea;
