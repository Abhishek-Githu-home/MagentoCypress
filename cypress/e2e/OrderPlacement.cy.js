describe('Placing an order in Magento site', () => {
  it('Visit the site', () => {
    //Visit the Magento Application
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')

    //Provided Account Email address
    cy.xpath('//input[@id="email"]').type("Test13102513@gmail.com").then(() => {
      cy.log("Provided Email address")
    })

    //Provided Account Password
    cy.xpath('//input[@id="pass"]').type("Password@U123").then(() => {
      cy.log("Provided Account Password")
    })

    //Clicks on sign in button
    cy.contains('button', 'Sign In').click().then(() => {
      cy.log("Clicked on sign in")
    })
    
    cy.wait(3000)
    //Navigate to sale section
    cy.contains('a', 'Sale').click().then(() => {
      cy.log("Clicked on sale menu")
    })


    //Selecting Hoodies and sweatshirts from catagories
    cy.contains('a', 'Hoodies and Sweatshirts').click().then(() => {
      cy.log("Clicked on Bags to order");
    })

    //Selecting the Hoodie
    cy.xpath('//img[@alt="Circe Hooded Ice Fleece"]').click().then(() => {
      cy.log("Clicked on Hoodie")
    })

    //Selecting the Hoodie size
    cy.xpath('//div[@aria-label="M"]').click().then(() => {
      cy.log("Selected Hoodie size as 'M'")
    })

    //Selecting the Hoodie color
    cy.xpath('//div[@aria-label="Green"]').click().then(() => {
      cy.log('Selected Hoodie color as "Green" ')
    })

    //Selecting the quantities
    cy.xpath('//input[@name="qty"]').clear().type('4').then(() => {
      cy.log("Selected the quantity of Hoodies")
    })

    //Added to cart section
    cy.xpath('//button[@title="Add to Cart"]').click().then(() => {
      cy.log("Added to cart section")
    })

    cy.wait(2000)
    //Show cart
    cy.xpath('//a[@class="action showcart"]').click().then(() => {
      cy.log('Clicked on Showcart') 
    })

    cy.wait(3000)
    //Updating the count in cart section
    cy.xpath('//input[@class="item-qty cart-item-qty"]').clear().type('2').then(() => {
      cy.log("Modified the count")
    })
    cy.wait(2000)
    cy.xpath('//button[@title="Update"]').click().then(() => {
      cy.log('Updated the Cart section')
    })

    //Proceeding for checkout
    cy.xpath('//button[@id="top-cart-btn-checkout"]').click().then(() => {
      cy.log('Proceeding for checkout')
    })

    // Select the type of shipping methods
    cy.xpath('//input[@value="tablerate_bestway"]').click().then(() => {
      cy.log("Selected the Shipping methods")
    })

    cy.wait(2000)
    cy.xpath('//button[@data-role="opc-continue"]').click({ multiple: true }).then(() => {
      cy.log("Clicked on next ")
    })
    
    //Successfully place an order
    cy.xpath('//button[@title="Place Order"]').click({ multiple: true }).then(() => {
      cy.log('Clicked on Place order')
    })

  })

  //Logout from application
  it('Logout', () => {
    cy.log("Order placed successfully and logout from application")
  })

})