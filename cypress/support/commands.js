 import LoginPage from '../pages/LoginPage'

Cypress.Commands.add('entrarAlHome', (user, password) => {
    LoginPage.login(user, password)
})