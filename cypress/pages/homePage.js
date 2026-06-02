class homePage {

hamburgerMenu() {
    return cy.get('#react-burger-menu-btn');
  }

logoutButton() {
    return cy.get('[data-test="logout-sidebar-link"]');
  } 

productsCard() {
    return cy.get('[data-test="inventory-item"]');
  }

filtrosProductos() {
    return cy.get('[data-test="product-sort-container"]');
  }

filtroPrecioMenorMayor() {
    return cy.get('[data-test="product_sort_container"]');
  }  

priceProduct(){
    return cy.get('[data-test="inventory-item-price"]');
}

botonAddToCart() {
    return cy.contains('button', 'Add to cart')
}

botonCarrito() {
    return cy.get('[data-test="shopping-cart-link"]')
}



//metodos 

logout() {
    this.hamburgerMenu().click();
    this.logoutButton().click();
}

productsCount() {
    return this.productsCard().its('length');
}

ApplyFilterPriceLowToHigh() {
    this.filtrosProductos().select('lohi');
}

confirmarPrecioMenorMayor() {
      this.priceProduct()
        .then(($prices) => {

            const prices = [...$prices].map(price =>
                Number(price.innerText.replace('$', ''))
            )

            cy.log(`Precios encontrados: ${prices.join(', ')}`)

            let errores = []

            for (let i = 0; i < prices.length - 1; i++) {

                if (prices[i] > prices[i + 1]) {

                    errores.push(
                        `Error entre producto ${i + 1} ($${prices[i]}) y producto ${i + 2} ($${prices[i + 1]})`
                    )
                }
            }

            if (errores.length > 0) {

                throw new Error(
                    `Los precios NO están ordenados de menor a mayor.\n${errores.join('\n')}`
                )

            } else {

                cy.log('Los precios están correctamente ordenados de menor a mayor.')

            }

        })
  
}

seleccionarElPrimerProducto() {
    this.botonAddToCart().first().click();    
}

checkCarritoCreado() {
 if(this.botonCarrito().should('exist')) {
    cy.log('El carrito se ha creado correctamente.')
 } else {
    throw new Error('El carrito no se ha creado.')
 }
}

agregarDosProductosAlCarrito() {
    this.botonAddToCart().eq(0).click()
    this.botonAddToCart().eq(1).should('be.visible').click()
}


irAlCarrito() {
    this.botonCarrito().click();
}



agregarProducto(nombreProducto) {

    cy.get(
        `[data-test="add-to-cart-sauce-labs-${nombreProducto}"]`
    ).click()

}






}

export default new homePage()