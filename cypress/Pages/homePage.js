class HomePage{
    elements = {
        titleHomePage: () => cy.get('title'),
        womenClothing: () => cy.get('#ui-id-4 > .ui-menu-icon'),
        //topsWomen: () => cy.get('#ui-id-9'),
        hoodiesWomen: () => cy.get('.categories-menu > :nth-child(2) > :nth-child(1) > a'),
        
        productWomen: () => cy.get(':nth-child(2) > .product-item-info > .details > .name > .product-item-link'),
        productSize: () => cy.get('#option-label-size-143-item-168'),
        productColor: () => cy.get('#option-label-color-93-item-53'),
        productQuantity: () => cy.get('#qty'),
        addToCart: () => cy.get('#product-addtocart-button'),
        productCart: () => cy.get('.showcart'),
        productAdded: () => cy.get('.minicart-items-wrapper'),
        
        deleteProduct: () => cy.get('.product-item-details > .actions > .secondary > .action'),
        //popUpDelete: () => cy.get('.modal-footer'),
        confirmationDelete: () => cy.get('.action-primary'),
        //productDeleted: () => cy.get('[type="button"]')
        messageDeleteProd: () => cy.get('.product-item-details > .actions > .secondary > .action')

      
        
    }

    selectWomenCloting() {
        this.elements.womenClothing().click();
    }

    hoverTopWomen() {
        this.elements.topsWomen().trigger('mouseover');
    }

    clickHoddiesWomen() {
        this.elements.hoodiesWomen().click();
    }

    selectProductWomen() {
        this.elements.productWomen().click();
    }

    selectSize() {
        this.elements.productSize().click();
    }

    selectColor() {
        this.elements.productColor().click();
    }

    selectQuality() {
        this.elements.productQuantity().type('1');
    }

    clickAddToCart() {
        this.elements.addToCart().click();
    }
    clickCart() {
        this.elements.productCart().click();
    }

    clickDeleteProduct() {
        this.elements.deleteProduct().click();
    }

    clickConfirmationDelete() {
        this.elements.confirmationDelete().click();
    }

}

export default HomePage;