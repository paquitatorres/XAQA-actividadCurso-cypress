import HomePage from '../pages/homePage';

describe('Inventário', () => {

it('Verificar cantidad de productos en inventario', () => {
   cy.entrarAlHome('standard_user', 'secret_sauce'); 
   cy.log('Cantidad de productos en inventario:', HomePage.productsCount());
  });


it('Ordenar productos por precio (menor a mayor)', () => {
   cy.entrarAlHome('standard_user', 'secret_sauce'); 
   HomePage.ApplyFilterPriceLowToHigh();
   HomePage.confirmarPrecioMenorMayor();
  
  });








})