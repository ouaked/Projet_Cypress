Cypress.Commands.add("choix_user", (projet) => {
    cy.get('#projectSelect')
            .select(projet.projectSelect)
        cy.get('#amount')
            .select(projet.amount)
        cy.get('#creditMaturity')
            .select(projet.creditMaturity)
})
Cypress.Commands.add('buttonClick', (label) => {
    cy.contains(label).click()
})

Cypress.Commands.add('urlWebSite', (urlLog )=>{
    cy.url().should('include', urlLog )
})

Cypress.Commands.add('pageTitle', (pageTitle )=>{
    cy.get('title')
            .should('contain',pageTitle)
})

Cypress.Commands.add("emailUser", (identity) => {
    cy.get('#email-input')
        .type(identity.email)
        .should('have.value',identity.email)
})

Cypress.Commands.add("situation_familiale_user", (identity) => {
    cy.get('#maritalStatus-input').select(identity.maritalStatus).should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input').select(identity.childNumber).should('have.class', 'ng-valid')
})

Cypress.Commands.add("situation_user", (logement) => {
    cy.get('#housingStatus-input').select(logement.housingStatus)
    cy.get('#housingStatusFrom-input-month').type(logement.housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(logement.housingStatusYear)
})
