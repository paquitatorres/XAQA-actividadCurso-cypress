import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"

describe("Login", () => {
  
  
 it("Login exitoso con usuario estándar", () => {
    LoginPage.login("standard_user", "secret_sauce");
    cy.url().should('include', '/inventory.html'); 
    cy.get('.app_logo')
      .should('be.visible')
      .should('have.text', 'Swag Labs')
  })

it("Login con contraseña incorrecta", () => {
    LoginPage.login("standard_user", "12345")
    LoginPage.errorMensagge().should('be.visible').and('contain', 'Username and password do not match any user in this service')
  })

//Se muestra mensaje de error: 'Username and password do not match any user in this service'. No se redirige.

 it("Login con campos vacíos", () => {
    LoginPage.loginusuariovacio()
    LoginPage.errorMensagge().should('be.visible').and('contain', 'Username is required')
  })
//Se muestra mensaje: 'Username is required'. No se redirige.

it("Login con usuario bloqueado", () => {
    LoginPage.login("locked_out_user", "secret_sauce")
    LoginPage.errorMensagge().should('be.visible').and('contain', 'Sorry, this user has been locked out.')
  })

//Se muestra mensaje: 'Sorry, this user has been locked out.' El usuario no ingresa al sistema.


   it("Logout desde el menú hamburguesa", () => {
    LoginPage.login("standard_user", "secret_sauce")
    HomePage.logout()
    cy.url().should('include', '/');
  })
//El usuario es redirigido a la pantalla de Login (/). La sesión se cierra correctamente.


})