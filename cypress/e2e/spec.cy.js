const dataLogin = require ('../e2e/data.json'); //datos del json para login


describe('template spec', () => {
  before('Open application', () => {
    cy.clearCookies()
    cy.clearLocalStorage();
      // Disable service workers before each test
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
  }
        }) 
  it('passes', () => {
    cy.visit("https://www.coppel.com/LogonForm?myAcctMain=1&catalogId=10051&langId=-5&storeId=10151", { headers: { "Accept-Encoding": "gzip, deflate" } });
    cy.get('input[type="text"]').should('be.visible').type(dataLogin.username)
    cy.get('input[type="password"]').should('be.visible').type(dataLogin.password).wait(10000)
    cy.clearCookies().wait(10000)
    cy.get('.button_align', { timeout: 20000 }).should('exist').should('be.visible').click({force: true}).wait(10000)



//#btn-login
//WC_AccountDisplay_links_2
//div[data-login="inicio_sesion"]

  })
})