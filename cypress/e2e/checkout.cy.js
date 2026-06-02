import HomePage from "../pages/homePage";
import CarritoPage from "../pages/carritoPage";
import CheckoutPage from "../pages/checkoutPage";

describe("Checkout", () => {

    it('Completar checkout con datos válidos', () => {
        cy.entrarAlHome('standard_user', 'secret_sauce');
        HomePage.seleccionarElPrimerProducto();
        HomePage.irAlCarrito();
        CarritoPage.irAlCheckout();
        CheckoutPage.completarCheckout('Juan', 'Peréz', '5000');
        CheckoutPage.confirmarCheckout('Thank you for your order!');
    
    });
//Se muestra pantalla de confirmación con mensaje: 'Thank you for your order!'


    it('Checkout sin completar campos obligatorios', () => {
        cy.entrarAlHome('standard_user', 'secret_sauce');
        HomePage.seleccionarElPrimerProducto();
        HomePage.irAlCarrito();
        CarritoPage.irAlCheckout();
        CheckoutPage.continuarConCamposVacios();
        CheckoutPage.continuarConCamposVacios();
        CheckoutPage.mensajeErrorCheckout('Error: First Name is required');

    });

//Se muestra mensaje de error: 'First Name is required'

});