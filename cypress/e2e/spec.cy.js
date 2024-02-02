const dataLogin = require ('../e2e/data.json'); //datos del json para login
const { onLoginPage } = require('../support/page_object/logIn');

describe('template spec', () => {
  before('Open application', () => {
    cy.clearCookies()
    cy.clearAllLocalStorage();
        }) 
  it('passes', () => {
    cy.visit("https://www.coppel.com/LogonForm?myAcctMain=1&catalogId=10051&langId=-5&storeId=10151", { headers: { "Accept-Encoding": "gzip, deflate" } });
    onLoginPage.login(dataLogin.username, dataLogin.password)
  })
})