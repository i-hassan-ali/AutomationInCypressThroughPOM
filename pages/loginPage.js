export class LoginPage {

    login_username_phone_locator = '.form-control';
    login_username_password_locator = '#outlined-adornment-password';
    login_buttonClick_locator = '.jss1';

    enterPhone(loginPhone) {
        cy.get(this.login_username_phone_locator).type(loginPhone)
    }
    enterPassword(loginPassword) {
        cy.get(this.login_username_password_locator).type(loginPassword)
    }
    enterLoginButton() {
        cy.get(this.login_buttonClick_locator).click()
    }


}