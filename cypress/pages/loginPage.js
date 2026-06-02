class LoginPage {
  usernameInput() {
    return cy.get('[data-test="username"]')
  }

  passwordInput() {
    return cy.get('[data-test="password"]')
  }

  loginButton() {
    return cy.get('[data-test="login-button"]')
  }

  errorMensagge() {
    return cy.get('[data-test="error"]')
  }


  login(user, pass) {
    cy.visit('/')
    this.usernameInput().type(user);
    this.passwordInput().type(pass);
    this.loginButton().click()
  }


loginusuariovacio(){
cy.visit('/')
this.loginButton().click()
}

}

export default new LoginPage()