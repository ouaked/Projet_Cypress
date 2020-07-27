describe(' titre ', () => {

    let celib = require('/Users/ouaks/Cypress/Projet_younited_credit/cypress/fixtures/Profil_celibataire')
    
    before("site internet", () => {
        cy.visit('https://www.younited-credit.com')
        cy.urlWebSite('younited-credit')
        cy.pageTitle( 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
    })
    it("page d'accueil", () =>{
        cy.choix_user(celib.projet)
        cy.wait(5000)
        cy.buttonClick('CONTINUER')
    })

    it('Email', () =>{
        cy.urlWebSite('/email')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.emailUser(celib.identity)
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.wait(5000)
        cy.buttonClick('Voir mon offre personnalisée')
    })
    it('Situation familiale', () =>{
        cy.urlWebSite('/familysituation')
        cy.pageTitle('Younited Credit')
        cy.situation_familiale_user(celib.identity)
        cy.get('[type="checkbox"]')
            .uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('logement', () =>{
        cy.urlWebSite('/housing')
        cy.pageTitle('Younited Credit')
        cy.situation_user(celib.logement)
        cy.get('[type="checkbox"]').uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('Situation profetionnelle', () =>{
        cy.urlWebSite('/professionalsituation')
        cy.pageTitle('Younited Credit')
        cy.activityCeliba(celib.activityStatus, celib.activity)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    })
    if(celib.identity.maritalStatus != "SINGLE"){
        it('Activité du conjoint', () =>{
            cy.urlWebSite('/partnerprofession')
            cy.pageTitle('Younited Credit')
            cy.activite_conjoint_user(celib.partnerActivityStatus, celib.partnerActivity)
            cy.buttonClick('Suite')
            
        })
        it('Identité du conjoint', () =>{
            cy.urlWebSite('/partneridentity')
            cy.pageTitle('Younited Credit')
            cy.identityPartnerUser(celib.partnerStatus, celib.partnerIdentity)
            cy.buttonClick('Suite')
        })
    }
    it('Revenu', () =>{
        cy.urlWebSite('/incomes')
        cy.pageTitle('Younited Credit')
        cy.revenu_user(celib.mariedStatus, celib.activity, celib.logement, celib.partnerActivity)
        cy.buttonClick('Suite')
    })

    it('loyer', () =>{
        cy.urlWebSite('/outcomes')
        cy.pageTitle('Younited Credit')
        cy.loyer_User(celib.situation_logement, celib.logement)
        cy.buttonClick('Suite')
    })
    it('Banque celibataire', () =>{
        cy.urlWebSite('/bank')
        cy.pageTitle('Younited Credit')
        cy.banque_user(celib.banque)
        cy.buttonClick('Suite')
    })
   
    it('Identité user celibataire', () =>{
        cy.urlWebSite('/identity')
        cy.pageTitle('Younited Credit')
        cy.identity_User_Celib(celib.identity)
        cy.buttonClick('Suite')
    })
     
    it('Contact', () =>{
        cy.urlWebSite('/contact')
        cy.pageTitle('Younited Credit')
        cy.contact( celib.identity)
        cy.buttonClick('Suite')
    })
  

  
   /* before(() => {
        cy.visit('https://www.younited-credit.com')
        cy.get('#projectSelect').select('FURNITURE').should('contain','')
        cy.get('#amount').select('10K')
        cy.get('#creditMaturity').select('M6')
        cy.contains('CONTINUER').click()
        cy.url().should('contain', '/email')
        cy.get('#email-input').type('toto@yopmail.com').should('have.value', 'toto@yopmail.com')
        cy.contains('Voir mon offre personnalisée').click()
        cy.url().should('contain', '/familysituation')
   
    it('Situation familliale : Célibataire', () => {
        cy.get('#maritalStatus-input').select('SINGLE')
        cy.get('#childNumberPropal-input').select('0')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/housing')
    })
        it('logement : Locataire', () => {
        cy.get('#housingStatus-input').select('TENANT')
        cy.get('#housingStatusFrom-input-month').type('01').should('have.value', '01')
        cy.get('#housingStatusFrom-input-year').type('2020').should('have.value', '2020')
        cy.get(':checkbox').uncheck({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/professionalsituation')
    })
        it('Situation proffetionnelle : Independant', () => {
        cy.get('#activitySector-input').select('INDEPENDENT')
        cy.get('#profession-input').select('CRAFTSMAN')
        cy.get('#businessActivityStartDate-input-month').type('06').should('have.value', '06')
        cy.get('#businessActivityStartDate-input-year').type('2019').should('have.value', '2019')
        cy.get('#ISCOMPANYBANKRUPT_FALSE').check({force:true})
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain', '/incomes')
    })
        it('Salaire', () => {
        cy.get('#mainIncome-input').type('2000').should('have.value', '2000')
        cy.contains('Suite',{timeout: 3000}).click()
    })
        it('Montant du loyer', () => {
        cy.get('#rentAmount-input').type('450').should('have.value', '450')
        cy.url().should('contain', '/outcomes')
    })
        it('Credit en cours', () => {
        cy.get('#loanCount-input').select('1')
        cy.get('#type-input').select('AUTO_MOTO')
        cy.get('#loanAmount-input').type('100').should('have.value', '100')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/bank')
    })
        it('Banque', () => {
        cy.get('#bankCode-input').select('BANQUE_POSTALE').should('contain','Banque Postale')
        cy.get('#bankFrom-input-year').type('2007').should('have.value','2007')
        cy.contains('Suite',{timeout: 3000}).click()
        cy.url().should('contain','/identity')
    })
        it('Identité', () => {
        cy.get('#GENDERCODE_M').check({force:true})
        cy.get('#lastName-input').type('Toto').should('have.value','Toto')
        cy.get('#firstName-input').type('Kiki').should('have.value','Kiki')
        cy.get('#dateOfBirth-input-day').type('15').should('have.value','15')
        cy.get('#dateOfBirth-input-month').type('08').should('have.value','08')
        cy.get('#dateOfBirth-input-year').type('1986').should('have.value','1986')
        cy.get('#postalCode-input').type('33300').should('have.value','33300')
        cy.get('#city-input').select('3306333300').should('contain','BORDEAUX')
        cy.contains('Suite').click()
        cy.url().should('contain','/contact')
    })
        it('Contacte', () => {
        cy.get('#cellPhoneNumber-input').type('0651736111').should('have.value','0651736111')
        cy.get('#phoneNumber-input').type('0551736112').should('have.value','0551736112')
        cy.get('#address-input').type('3 rue des tulipiers').should('have.value',"3 rue des tulipiers")
        cy.get('#postalCode-input').type('33170').should('have.value','33170')
        cy.get('#city-input').select('3319233170').should('contain','GRADIGNAN')
        cy.get('#countryZone-input').select('FR').should('contain','France')
        cy.contains('Suite').click() 
        cy.url().should('contain', '/offers/refused_reoptin')

        //cy.contains('Obtenir votre financement en 1 clic').click() 
    }) 
     })*/
})