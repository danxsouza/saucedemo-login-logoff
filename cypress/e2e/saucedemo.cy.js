import homePage from '../pages/homePage'

it('Should login to inventory page', () =>{
  cy.visit('https://www.saucedemo.com/v1/')
  homePage.clickOnSignin();
  homePage.clickLogOff();
})