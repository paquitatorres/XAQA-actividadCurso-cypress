import HomePage from '../pages/homePage';
import CarritoPage from '../pages/carritoPage';


describe('Carrito', () => {

  it('Agregar un producto al carrito', () => {
  cy.entrarAlHome('standard_user', 'secret_sauce'); 
  HomePage.seleccionarElPrimerProducto();
  HomePage.checkCarritoCreado();
  });

  it('Agregar múltiples productos y verificar contador', () => {
  cy.entrarAlHome('standard_user', 'secret_sauce'); 
  
  cy.fixture('productsData').then((data) => {
        data.productos.forEach((producto) => { HomePage.agregarProducto(producto.nombre)})
    })

    HomePage.irAlCarrito();
    CarritoPage.contarProductosEnCarrito().should('eq', 3);

  });
  
  it('Eliminar un producto desde la página del carrito', () => {
  cy.entrarAlHome('standard_user', 'secret_sauce'); 
    HomePage.agregarDosProductosAlCarrito();
    HomePage.irAlCarrito();
    CarritoPage.eliminarProducto();
    CarritoPage.contarProductosEnCarrito().should('eq', 1);

  });


});