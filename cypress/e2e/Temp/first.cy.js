/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('Example', () => {
      //Abrir la ubicacion y cambiar region a 90001
      cy.get('#glow-ingress-block').should('be.visible').click()
      cy.wait(5000)
      cy.get('#GLUXZipUpdateInput').should('be.visible').type('90001')
      //Cerrar ventana de confirmacion de cambio de ubicacion
      cy.get('#GLUXZipUpdate').should('be.visible').click()
      cy.wait(5000)
      cy.get('#GLUXConfirmClose-announce').click({ force: true })
      cy.wait(5000)
      //Hacer una busqueda de 'logitech keyboard'
      cy.get('#twotabsearchtextbox').should('be.visible').type('logitech keyboard')
      cy.get('#nav-search-submit-button').should('be.visible').click()
      //Ordernar de menor a mayor
      cy.get('#a-autoid-0').should('be.visible').click()
      cy.get('.a-dropdown-link').contains('Price: Low to High').should('be.visible').click()
      //Elegir el primer resultado
      cy.get('span.a-price-whole').should('be.visible').first().click()
      //Agregar al carrito
      cy.get('#add-to-cart-button').should('be.visible').click()
      //Realizar busqueda de logitech keyboard' nuevamente
      cy.get('#twotabsearchtextbox').should('be.visible').type('logitech mouse', {force: true})
      cy.get('#nav-search-submit-button').should('be.visible').click()
      //Ordenar de mayor a menor
      cy.get('.a-dropdown-label').contains('Sort by:').should('be.visible').click()
      cy.get('.a-dropdown-link').contains('Price: High to Low').should('be.visible').click()
      //Elegir el primer resultado
      cy.get('span.a-price-whole').should('be.visible').first().click()
      //Agregar al carrito
      cy.get('#add-to-cart-button').should('be.visible').click()
      cy.wait(5000)
      cy.get("body").then($body => {
        if ($body.find("#attachSiAddCoverage").length > 0) {   
        //evaluates as true if button exists at all
            cy.get("#attachSiAddCoverage").then($header => {
              if ($header.is(':visible')){
                //you get here only if button EXISTS and is VISIBLE
                cy.get('#attachSiNoCoverage').click()
              } else {
                //you get here only if button EXISTS but is INVISIBLEs
              }
            });
        } else {
           //you get here if the button DOESN'T EXIST
           assert.isOk('everything','everything is OK');
        }
    });

  //Hacer una busqueda de 'logitech keyboard'
  cy.get('#twotabsearchtextbox').should('be.visible').type('logitech headset',  {force: true})
  cy.get('#nav-search-submit-button').should('be.visible').click({force: true})
  //Obtener la cantidad de elementos validos
  let countOfElements = 0;
  cy.get("span.a-price-whole").then($elements => {
      countOfElements = $elements.length;
      countOfElements = countOfElements/2
      countOfElements = Math.round(countOfElements)
      $elements.get(countOfElements).click()
    });
  //Agregar al carrito
  cy.get('#add-to-cart-button').should('be.visible').click()
  cy.wait(5000)
      cy.get("body").then($body => {
        if ($body.find("#attachSiAddCoverage").length > 0) {   
        //evaluates as true if button exists at all
            cy.get("#attachSiAddCoverage").then($header => {
              if ($header.is(':visible')){
                //you get here only if button EXISTS and is VISIBLE
                cy.get('#attachSiNoCoverage').click({force: true})
              } else {
                //you get here only if button EXISTS but is INVISIBLEs
              }
            });
        } else {
           //you get here if the button DOESN'T EXIST
           assert.isOk('everything','everything is OK');
        }
    });
    cy.wait(5000)
    //ir al carrito de compras
    cy.get('#nav-cart').should('be.visible').click({force:true})

    //cambiar la cantidad al primer producto
    cy.get('[data-a-class="quantity"]').should('be.visible').first().click()
    cy.get("#quantity_2").should('be.visible').click()
    //borrar el ultimo producto
    cy.get('[value="Delete"]').should('be.visible').last().click()
    
    //Mover para despues el ultimo producto
    cy.wait(5000)
    cy.get('[value="Save for later"]').should('be.visible').last().click()
  })
})