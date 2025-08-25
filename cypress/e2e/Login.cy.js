describe('Magento Login Flow', () => {
  it('visit the test site and start account creation', () => {
    // Visit the Magento demo site
    cy.visit('https://magento.softwaretestingboard.com/');

    // Log the page title
    cy.title().then(title => {
      cy.log('Page title:', title);
    });

    // Click the "Create an Account" link
    cy.contains('a', 'Create an Account').click().then(() => {
      cy.log('Clicked on Create Account');
    });

    // Page Title 
    cy.xpath('//span[@data-ui-id="page-title-wrapper"]').invoke('text').then((text) => {
      cy.log(text)
    });

    //Random text generator
    const RandomText = Math.random().toString().substring(2, 10);
    const RandomNNumber = Math.floor(Math.random() * 10000) + 1;

    // Click on first name field and type a value
    cy.xpath('//input[@id="firstname"]').type("User" + RandomNNumber).then(() => {
      cy.log('Provided First Name in field')
    })
    
    // Click on Last name field and type a value
    cy.xpath('//input[@id="lastname"]').type("Lname" + RandomText).then(() => {
      cy.log('Provided Last Name in field')
    })

    // Verify the Sign-In information header text
    cy.get('#form-validate > fieldset.fieldset.create.account > legend > span').should('be.visible').then(() => {
      cy.log("Sign-in Information header available")
    })

    // Click on Email field and type an email address
    cy.xpath('//input[@title="Email"]').type(  "Test" + RandomText + '@gmail.com').then(() => {
      cy.log('Provided Email ID')
    })
    
    // Provided the Password
    cy.xpath('//input[@id="password"]').type('Password@U123').then(() => {
      cy.log('Entered Password')
    })
    
    // Provided the confirmation password
    cy.xpath('//input[@id="password-confirmation"]').type('Password@U123').then(() => {
      cy.log('Entered Password for confirmation')
    })

    // Clicks on submit and Account should get created
    cy.xpath('//button[@title="Create an Account"]').click().then(() => {
      cy.log('Clicked on Create an Account Button')
    })

    // Prints the Account information details
    cy.xpath('//div[@class="box box-information"]').invoke('text').then((text) => {
      cy.log(text)
    })

  });

  it('Log out the application', () => {
    cy.log("Account has been created successfully")
  })
});