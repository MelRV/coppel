const dataLogin = require ('../e2e/data.json'); //datos del json para login


describe('template spec', () => {
  before('Open application', () => {
    cy.clearCookies()
    cy.clearLocalStorage();
        }) 
  it('passes', () => {
    cy.visit("https://www.coppel.com/LogonForm?myAcctMain=1&catalogId=10051&langId=-5&storeId=10151", { headers: { "Accept-Encoding": "gzip, deflate" } });
    cy.get('input[type="text"]').should('be.visible').type(dataLogin.username)
    cy.get('input[type="password"]').should('be.visible').type(dataLogin.password)
    cy.get('div[data-login="inicio_sesion"]',{timeout:10000}).click().wait(10000);


  })
})