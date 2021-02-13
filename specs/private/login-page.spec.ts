import { browser } from 'protractor';

//import e2eAuthCollection from ''

import { E2ePrivateArea } from './login-page.po'

describe('Login Page', () => {
  const page = new E2ePrivateArea();
 

  beforeEach(() => {
   
    page.open();
  });

 

  afterAll(() => {
   // page.quit();
  });
});
