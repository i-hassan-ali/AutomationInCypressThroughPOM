import { SignUp } from "./pages/signupPage";
const signUp = new SignUp();
let userSignUpData = {
    userSignUpPhone : '03060760130'
}
it("Verify SignUp" , ()=>{
    cy.visit('https://www.dhartee.pk/register');
    signUp.enterPhon(userSignUpData.userSignUpPhone)
    signUp.clickContinue()
})