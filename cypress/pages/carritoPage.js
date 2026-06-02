class carritoPage {

productoEnCarrito(){
    return cy.get('[data-test="inventory-item"]');
}

botonEliminarProducto() {
    return cy.contains('button', 'Remove');
}

botonCheckout() {
    return cy.get('[data-test="checkout"]');
}



//metodos

eliminarProducto() {
    this.botonEliminarProducto().first().click();    
 }

contarProductosEnCarrito() {
    return this.productoEnCarrito().its('length');
}

irAlCheckout() {
    this.botonCheckout().click();
}







  
}

export default new carritoPage()
