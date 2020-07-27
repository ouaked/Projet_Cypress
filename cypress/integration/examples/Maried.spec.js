
/*describe(' Tests Marié ', () => {
    before(() => {
        cy.visit('https://www.younited-credit.com')
       
    })

    it('Projet', () => {
        cy.get('#projectSelect').select('FURNITURE').should('contain','')
        cy.get('#amount').select('10K')
        cy.get('#creditMaturity').select('M6')
        cy.contains('CONTINUER').click()
    })
    it('Email', () => {
        cy.url().should('contain', '/email')
        cy.get('#email-input').type('cici@yopmail.com').should('have.value', 'cici@yopmail.com')
        cy.contains('Voir mon offre personnalisée').click()
        cy.url().should('contain', '/familysituation')
    })
    it('Marié, Propietaire...', () => {
        
        cy.get('#maritalStatus-input').select('MARRIED').should('contain','Marié(e)')
        cy.get('#childNumberPropal-input').select('1')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/housing')
    })
    it('Logement : Locataire', () => {
        cy.get('#housingStatus-input').select('HOME_OWNERSHIP_WITH_MORTGAGE').should('contain','Propriétaire (avec crédit immobilier en cours)')
        cy.get('#housingStatusFrom-input-month').type('10').should('have.value', '10')
        cy.get('#housingStatusFrom-input-year').type('2010').should('have.value', '2010')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/professionalsituation')
    })
    it('Situation proffetionnelle : Secteur privé', () => {
        cy.get('#activitySector-input').select('PRIVATE_SECTOR').should('contain','Salarié(e) du secteur privé')
        cy.get('#profession-input').select('SECURITY_GUARD').should('contain','Agent de sécurité')
        cy.get('#contractType-input').select('CDI')
        cy.get('#employedFrom-input-month').type('01').should('have.value', '01')
        cy.get('#employedFrom-input-year').type('2005').should('have.value', '2005')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/partnerprofession')
    })
    it('Situation proffetionnelle conjoint : Secteur privé', () => {
        cy.get('#partnerActivitySector-input').select('PRIVATE_SECTOR').should('contain','Salarié(e) du secteur privé')
        cy.get('#partnerProfession-input').select('SECURITY_GUARD').should('contain','Agent de sécurité')
        cy.get('#partnerContractType-input').select('CDI').should('contain','CDI')
        cy.get('#partnerEmployedFrom-input-month').type('06').should('have.value', '06')
        cy.get('#partnerEmployedFrom-input-year').type('2008').should('have.value', '2008')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/incomes')
    })
    it('Salaire', () => {
        cy.get('#mainIncome-input').type('1800').should('have.value', '1800')
        cy.get('#coIncome-input').type('1600').should('have.value', '1600')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/outcomes')
    })
    it('Montant du loyer', () => {
        cy.get('#mortgageAmount-input').type('800').should('have.value', '800')
        cy.get('#loanCount-input').select('0')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/bank')
    })
    it('Banque', () => {
        cy.get('#bankCode-input').select('CREDIT_AGRICOLE').should('contain','Crédit Agricole')
        cy.get('#bankFrom-input-year').type('2002').should('have.value','2002')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/identity')
    })
    it('Identité', () => {
        cy.get('#GENDERCODE_M').check({force:true})
        cy.get('#lastName-input').type('Cici').should('have.value','Cici')
        cy.get('#firstName-input').type('Titi').should('have.value','Titi')
        cy.get('#dateOfBirth-input-day').type('20').should('have.value','20')
        cy.get('#dateOfBirth-input-month').type('06').should('have.value','06')
        cy.get('#dateOfBirth-input-year').type('1980').should('have.value','1980')
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.contains('Suite').click()
    })
    it('Identité conjoint', () => {
        cy.url().should('contain','/partneridentity')
        cy.get('#GENDERCODE_MME').check({force:true})
        cy.get('#lastName-input').type('Cici').should('have.value','Cici')
        cy.get('#maidenName-input').type('Didi').should('have.value','Didi')
        cy.get('#firstName-input').type('Katy').should('have.value','Katy')
        cy.get('#dateOfBirth-input-day').type('10').should('have.value','10')
        cy.get('#dateOfBirth-input-month').type('12').should('have.value','12')
        cy.get('#dateOfBirth-input-year').type('1982').should('have.value','1982')
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.contains('Suite').click()
        //Contact
    })
    it('Contacte', () => {
        cy.url().should('contain','/contact')
        cy.get('#cellPhoneNumber-input').type('0651736111').should('have.value','0651736111')
        cy.get('#phoneNumber-input').type('0551736112').should('have.value','0551736112')
        cy.get('#address-input').type('route des roses').should('have.value',"route des roses")
        cy.get('#postalCode-input').type('33700').should('have.value','33700')
        cy.get('#city-input').select('3328133700').should('contain','MERIGNAC')
        cy.get('#countryZone-input').select('FR').should('contain','France')
        cy.contains('Suite').click() 
    })
    
})*/


//Verssion avec commande 

describe('Maried credit tests', () =>{
    let marier = require('../../fixtures/Profil_marier')
    before('site internet', () =>{
        cy.visit('https://www.younited-credit.com/')
        cy.url().should('include', 'younited-credit')
        cy.get('title').should('contain', 'Le Crédit 100% en Ligne')
    })
    it("page d'accueil", () =>{
        cy.choix_user(marier.projet)
        cy.buttonClick('CONTINUER')
    })
    it('Email', () =>{
        cy.urlWebSite('/email')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.emailUser(marier.identity)
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.buttonClick('Voir mon offre personnalisée')
    })
    it('Situation familiale', () =>{
        cy.urlWebSite('/familysituation')
        cy.pageTitle('Younited Credit')
        cy.situation_familiale_user(marier.identity)
        cy.get('[type="checkbox"]')
            .uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('logement', () =>{
        cy.urlWebSite('/housing')
        cy.pageTitle('Younited Credit')
        cy.situation_user(marier.logement)
        cy.get('[type="checkbox"]').uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('Situation profetionnelle', () =>{
        cy.urlWebSite('/professionalsituation')
        cy.pageTitle('Younited Credit')
        cy.activityCeliba(marier.activityStatus, marier.activity)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    })
    if(marier.identity.maritalStatus != "SINGLE"){
        it("secteur d'activité du partenaire", () =>{
            cy.urlWebSite('/partnerprofession')
            cy.pageTitle('Younited Credit')
            cy.activite_conjoint_user(marier.activityStatus_partenaire, marier.activity_partenaire)
            cy.buttonClick('Suite')
        })
       /* it('identity du partenaire', () =>{
            cy.urlWebSite('/partneridentity')
            cy.pageTitle('Younited Credit')
            cy.identity_Partner(marier.partnerStatus, marier.identity_partenaire)
            cy.buttonClick('Suite')
        })*/
    }
    it('Revenu', () =>{
        cy.urlWebSite('/incomes')
        cy.pageTitle('Younited Credit')
        cy.revenu_user(marier.mariedStatus, marier.activity, marier.logement, marier.activity_partenaire)
        cy.buttonClick('Suite')
    })
    it('loyer', () =>{
        cy.urlWebSite('/outcomes')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.loyer_User(marier.situation_logement, marier.logement)
        cy.buttonClick('Suite')
    })
    it('Banque maried', () =>{
        cy.urlWebSite('/bank')
        cy.pageTitle('Younited Credit')
        cy.banque_user(marier.banque)
        cy.buttonClick('Suite')
    })
    it('Identité user', () =>{
        cy.urlWebSite('/identity')
        cy.pageTitle('Younited Credit')
        cy.identity_User_Celib(marier.identity)
        cy.buttonClick('Suite')
    })
    it('identity du partenaire', () =>{
        cy.urlWebSite('/partneridentity')
        cy.pageTitle('Younited Credit')
        cy.identity_Partner(marier.partnerStatus, marier.identity_partenaire)
        cy.buttonClick('Suite')
    })
    it('Contact', () =>{
        cy.urlWebSite('/contact')
        cy.pageTitle('Younited Credit')
        cy.contact( marier.identity)
        cy.buttonClick('Suite')
    })
})