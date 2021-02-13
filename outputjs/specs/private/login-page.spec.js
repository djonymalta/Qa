"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import e2eAuthCollection from ''
var login_page_po_1 = require("./login-page.po");
describe('Login Page', function () {
    var page = new login_page_po_1.E2ePrivateArea();
    beforeEach(function () {
        page.open();
    });
    afterAll(function () {
        // page.quit();
    });
});
