class CheckoutPage {
    
firstNameInput() {
    return cy.get('[data-test="firstName"]'); 
}  

lastNameInput() {
    return cy.get('[data-test="lastName"]');
}

zipCodeInput() {
    return cy.get('[data-test="postalCode"]');
}

botonContinue() {
    return cy.get('[data-test="continue"]');
}

mensajeErrorCheckoutElement() {
    return cy.get('[data-test="error"]');
} 

botonFinish() {
    return cy.get('[data-test="finish"]');
}

mensajeConfirmacionCheckout() {
    return cy.get('[data-test="complete-header"]');
}


//metodos

completarCheckout(firstName, lastName, zipCode) {
    this.firstNameInput().type(firstName);
    this.lastNameInput().type(lastName);
    this.zipCodeInput().type(zipCode);
    this.botonContinue().click();
}

mensajeErrorCheckout(mensaje) {
    this.mensajeErrorCheckoutElement().should('be.visible').and('have.text', mensaje);
}

confirmarCheckout(mensaje) {
    this.botonFinish().click();
    this.mensajeConfirmacionCheckout(mensaje).should('be.visible');

}

continuarConCamposVacios() {
    this.botonContinue().click();
}



}

export default new CheckoutPage()