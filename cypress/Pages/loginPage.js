class LoginPage{
    elements = {
        signInBtn: () => cy.get('.panel > .header > .authorization-link > a'),
        titleLoginPage: () => cy.get('title'),
        usernameInput: () => cy.get('#email'),
        passwordInput: () => cy.get('input[name="login[password]"]'),
        loginBtn: () => cy.get('#send2')      
    }
    clickSignIn(){
        this.elements.signInBtn().click();
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLoginButton(){
        this.elements.loginBtn().click();
    }

}

export default LoginPage;