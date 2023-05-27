export class SignUp {
    enterPhone(signupPhone){
        cy.get('.form-control').type(signupPhone)
    } 
    clickContinue(){
        cy.get('.jss1').click()
    }
    enterOtp(){
        
    }
}