class homePageObjects {

    openLocationModal() {
       return cy.get('#glow-ingress-block').should('be.visible')
    }
    locationTextBox() {
        return cy.get('#GLUXZipUpdateInput').should('be.visible')
     }
    modalCloseButton() {
        return cy.get('#GLUXZipUpdate').should('be.visible')
     }
    closeAnnouncementButton() {
        return cy.get('#GLUXConfirmClose-announce')
     }    
 
 }
 
 export default homePageObjects