import LoginPage from "../../Pages/loginPage";
import HomePage from "../../Pages/homePage";

const test = require('../../fixtures/credentials.json')

describe('Login Page', () => {
   
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
        
    });

    it('Verify Login successful', () => {
        const loginObj = new LoginPage();
        loginObj.clickSignIn();
        loginObj.elements.titleLoginPage().should('have.text', 'Customer Login')
        //cy.get('title').should('have.text', 'Customer Login')
        loginObj.typeUsername(test.username);
        loginObj.typePassword(test.password);
        loginObj.clickLoginButton();
        
        const homeObj = new HomePage()
        homeObj.elements.titleHomePage().should('have.text', 'Home Page')
        //cy.get('title').should('have.text', 'Home Page')
    });


});