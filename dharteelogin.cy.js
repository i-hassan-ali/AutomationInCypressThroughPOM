
import { LoginPage } from "./pages/loginPage";

const loginPage = new LoginPage();
let userData = {
    userPhone: '3060760130',
    userPassword: '1234@Dhatee'
}
it('Dhartee Login', () => {
    cy.visit('https://www.dhartee.pk/login');
    loginPage.enterPhone(userData.userPhone)
    loginPage.enterPassword(userData.userPassword)
    loginPage.enterLoginButton()
})
