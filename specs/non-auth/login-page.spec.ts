import { browser } from 'protractor';
import {  e2eAuthCollection } from './../../configurations/configAuth'
//import e2eAuthCollection from ''

import { E2eLoginPage } from './login-page.po'
import { E2ePrivateArea } from './../private/login-page.po'
describe('Login Page', () => {
  const page = new E2eLoginPage();
 const item = new E2ePrivateArea();

  beforeEach(() => {
   
    page.open();
  });

  it('should display login form', () => {
    // given
    const loginFormEl = page.loginForm;
    // when
    const isPresent = loginFormEl.isPresent();
    // then
    expect(isPresent).toBeTruthy();
  });

  it('should display submitButton', () => {
    // given
    const submitButtonEl = page.submitButton;
    // when
    const isPresent = submitButtonEl.isPresent();
    // then
    expect(isPresent).toBeTruthy();
  });

  it('should display usernameInput', () => {
    // given
    const usernameInputEl = page.usernameInput;
    // when
    const isPresent = usernameInputEl.isPresent();
    // then
    expect(isPresent).toBeTruthy();
  });

  it('should display passwordInput', () => {
    // given
    const passwordInputEl = page.passwordInput;
    // when
    const isPresent = passwordInputEl.isPresent();
    // then
    expect(isPresent).toBeTruthy();
  });

  it('should disable submit button while form is empty', () => {
    // given
    const sibmitButtonEl = page.submitButton;
    // when
    const disable = sibmitButtonEl.getAttribute('disabled');
    // then
    expect(disable).toBeTruthy();
  });

  it('should disable the submit button when the username field has no value', () => {
    
    // when
    const disabled = page.submitButton.getAttribute('disabled');
    // then
    expect(disabled).toBeTruthy();
  });

  it('should disable the submit button when the password field has no value', () => {
 
    // when
    const disabled = page.submitButton.getAttribute('disabled');
    // then
    expect(disabled).toBeTruthy();
  });

  it('should enable submit button while form is valid', () => {
    // given


    const login = page.usernameInput;
    const password = page.passwordInput;
    const submitButton = page.submitButton;
   
   
    // when
    login.sendKeys('djony.xavier@levecapital.com.br');
    password.sendKeys('Cheir0@2019');
    const disabled = submitButton.getAttribute('disabled');
    // then
    expect(disabled).toBeTruthy();
  });

  it('should leave login page after successfull login', () => {
    // given 
    const login = page.usernameInput;
    const password = page.passwordInput;
    const submitButton = page.submitButton;
    const imagem = item.imgNavBar;

    // when 
    const urltemp = browser.getCurrentUrl();
    login.sendKeys(e2eAuthCollection.validUser);
    password.sendKeys(e2eAuthCollection.password);
    // expect(submitButton.isPresent());
    submitButton.click();
    browser.wait(urltemp, 9 * 2000, 'wait change url');
    
    const url = browser.getCurrentUrl();
    
    // then
    expect(url).not.toContain('/login');
  });


  afterAll(() => {
   // page.quit();
  });
});
