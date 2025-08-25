describe('Search functionality in Magento', () => {
  it('Visit the Magento Application', () => {
    //Visit the magento account login page
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    
    //Provide the email address input
    cy.xpath('//input[@id="email"]').type('Test13102513@gmail.com').then((text) => {
      cy.log('Entered the Account Email ID')
    })
    
    //Provide the account password
    cy.xpath('//input[@id="pass"]').type('Password@U123').then((text) => {
      cy.log('Entered the Account Password')
    })

    //Clicks on sign in button
    cy.contains('button', 'Sign In').click().then(() => {
      cy.log("Clicked on sign in")
    })

    //Search the input
    cy.xpath('//input[@id="search"]').type('men t shirt').type('{enter}').then(() => {
      cy.log("Searching the provided input");
    })

    //Navigate to selected page
    cy.xpath('//div[@id="narrow-by-list"]').click();
    cy.contains('a', 'Gear').click().then(() => {
      cy.log('Landed on Gear page');
    })
  })

  it('Logout', () => {
    //Log out from application 
    cy.log('Search result is working');
  })
})