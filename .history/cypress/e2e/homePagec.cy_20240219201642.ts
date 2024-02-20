describe('Home Page', () => {
  beforeEach(function(){
      console.log("Starting home page test")
  })

  it('should load the home page', () => {
    cy.visit('http://localhost:3000');
  });

  it('should have a navbar', () => {
    cy.get('img[src="/assets/logo/stardustLogo.svg"]').should('be.visible')
     cy.get('a').should('exist').contains('Your Horoscopes')
  });

  it('should have the carousel present', ()=>{
  
     cy.get('h1').should('exist').contains('Click to see each zodiac sign')

     cy.get('.absolute > div:first-child').click();
     cy.get('.text-3xl').contains('Aquarius')

     cy.get('.absolute > div:nth-child(2)').click();
     cy.get('.text-3xl').contains('Pisces')

     cy.get('.absolute > div:nth-child(3)').click();
     cy.get('.text-3xl').contains('Aries')

     cy.get('.absolute > div:nth-child(4)').click();
     cy.get('.text-3xl').contains('Taurus')

     cy.get('.absolute > div:nth-child(5)').click();
     cy.get('.text-3xl').contains('Gemini')

     cy.get('.absolute > div:nth-child(6)').click();
     cy.get('.text-3xl').contains('Cancer')

     cy.get('.absolute > div:nth-child(7)').click();
     cy.get('.text-3xl').contains('Leo')

     cy.get('.absolute > div:nth-child(8)').click();
     cy.get('.text-3xl').contains('Virgo')

     cy.get('.absolute > div:nth-child(9)').click();
     cy.get('.text-3xl').contains('Libra')

     cy.get('.absolute > div:nth-child(10)').click();
     cy.get('.text-3xl').contains('Scorpio')

     cy.get('.absolute > div:nth-child(11)').click();
     cy.get('.text-3xl').contains('Sagittarius')

     cy.get('.absolute > div:nth-child(12)').click();
     cy.get('.text-3xl').contains('Capricorn')
    
  })

  it('should have a footer', () => {
    cy.get('img[src="/assets/logo/wordmark.png"]').should('exist');
    cy.get('h1').should('exist').contains('Copyright © 2024 – All rights Reserved')
  });
  
})