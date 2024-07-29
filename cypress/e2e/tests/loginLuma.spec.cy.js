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
        loginObj.typeUsername(test.username);
        loginObj.typePassword(test.password);
        loginObj.clickLoginButton();
        
        const homeObj = new HomePage()
        homeObj.elements.titleHomePage().should('have.text', 'Home Page')

        //---------------------------------

        homeObj.selectWomenCloting();
        homeObj.elements.titleHomePage().should('have.text', 'Women')
        homeObj.clickHoddiesWomen();


        //------- Select Product

        homeObj.selectProductWomen();
        homeObj.selectSize();
        homeObj.selectColor();
        //homeObj.selectQuality();
        homeObj.clickAddToCart();

        homeObj.clickCart();
        homeObj.elements.productAdded().should('be.visible');

        //--------Delete Product
        homeObj.clickDeleteProduct();
        homeObj.clickConfirmationDelete();
        homeObj.elements.messageDeleteProd().should('be.visible');
    });



});