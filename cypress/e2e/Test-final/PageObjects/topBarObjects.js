class topBarObjects {

    topSearchBox() {
       return cy.get('#twotabsearchtextbox').should('be.visible')
    }
    searchSubmitButton() {
        return cy.get('#nav-search-submit-button').should('be.visible')
     }
 }
 
 export default topBarObjects