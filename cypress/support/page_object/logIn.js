export class LoginPage {

    login(username, password){
       cy.get('#WC_AccountDisplay_div_1').then( form =>{
            cy.wrap(form).find('input[type="text"]').should('be.visible').type(username)
            cy.wrap(form).find('input[type="password"]').should('be.visible').type(password)
            cy.wrap(form).find('div[data-login="inicio_sesion"]').trigger('click');
            //cy.wrap(form).find('div[data-login="inicio_sesion"]').debug().click();
        })
        
    }
}
export const onLoginPage = new LoginPage()

