 import { browser, by, element } from "protractor";

const navbar = 'app-root app-wrapper-private lc-app-container lc-app-container-top ';
const imgLogoNavbar = `${navbar} img[src="https://leve-assets.s3-sa-east-1.amazonaws.com/images/logo.png"]`;
const passwordInputSelector = `${navbar} input[name="password"]`;
const submitButtonSelector = `${navbar} button[type="submit"]`;

export class E2ePrivateArea {
  
  open() {
    browser.get('/login')
  }

  quit() {
    browser.quit()
  }
  
  get loginForm() {
    return element(by.css(navbar))
  }

  get imgNavBar() {
    return element(by.css(navbar));
  }

  get passwordInput() {
    return element(by.css(passwordInputSelector));
  }

  get submitButton() {
    return element(by.css(submitButtonSelector));
  }
}
export default E2ePrivateArea
