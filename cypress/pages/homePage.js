class homePage {
  elements = {
    username: () => cy.get('#user-name'),
    password: () => cy.get('#password'),
    buttonLogin: () => cy.get('#login-button'),
    logout: () => cy.get('#logout_sidebar_link'),
    menuHamburger: () => cy.get('.bm-burger-button > button'),
  };

  clickOnSignin() {
    this.elements.username().type('standard_user');
    this.elements.password().type('secret_sauce');
    this.elements.buttonLogin().click();
  }
  clickLogOff() {
    this.elements.menuHamburger().click();
    this.elements.logout().click();
  }
}

module.exports = new homePage();