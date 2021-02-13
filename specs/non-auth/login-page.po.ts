 import { browser, by, element } from "protractor";

const loginFormSelector = 'app-root app-login-page form';
const usernameInputSelector = `${loginFormSelector} input[name="username"]`;
const passwordInputSelector = `${loginFormSelector} input[name="password"]`;
const submitButtonSelector = `${loginFormSelector} button[type="submit"]`;

export class E2eLoginPage {
  
  open() {
    browser.get('/login')
  }

  quit() {
    browser.quit()
  }
  
  get loginForm() {
    return element(by.css(loginFormSelector))
  }

  get usernameInput() {
    return element(by.css(usernameInputSelector));
  }

  get passwordInput() {
    return element(by.css(passwordInputSelector));
  }

  get submitButton() {
    return element(by.css(submitButtonSelector));
  }
}
export default E2eLoginPage
