beforeEach(() => {
  cy.visit('http://localhost:3000')
});

describe ('User flows - filtering by album', () => {

  it('should confirm true to be true', () => {
    expect(true).to.equal(true)
  });

  it('should render a header with the correct elements', () => {
    cy.get('header.header').find('img.logo')
    cy.get('header.header').find('h2.header-text').contains('My Photo Albums')
  });

  it('should render a form with the correct elements', () => {
    cy.get('div.form-container').find('h3.form-message').contains('Select a Photo Album by Number (1-100)')
    cy.get('form.form').find('input[type="number"]')
    cy.get('form.form').find('button.choose-button').contains('Choose Album')
  });

  it('should allow the user to select and album number and see the corresponding photos from that album', () => {
    cy.fetchAlbumThree()
    cy.get('div.full-card-container').should('have.length', 2)
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 101')
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 102')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: incidunt alias vel enim')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt')
  });

  it('should display an error message when the user inputs an invalid number into the form', () => {
    cy.get('form.form').find('input.form-input').type('333')
    cy.get('form.form').find('button.choose-button').click()
    cy.get('div.error-container').find('span.error-text').contains('Please select a number between 1 and 100')
  });

  it('should still display previously viewed photo cards after manking an invalid album search', () => {
    cy.fetchAlbumThree()
    cy.get('form.form').find('input.form-input').type('333')
    cy.get('form.form').find('button.choose-button').click()
    cy.get('div.error-container').find('span.error-text').contains('Please select a number between 1 and 100')
    cy.get('div.full-card-container').should('have.length', 2)
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 101')
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 102')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: incidunt alias vel enim')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt')
  });

  it('should not display the error message after making a valid search query', () => {
    cy.fetchAlbumThree()
    cy.get('form.form').find('input.form-input').type('333')
    cy.get('form.form').find('button.choose-button').click()
    cy.get('div.error-container').find('span.error-text').contains('Please select a number between 1 and 100')
    cy.get('div.full-card-container').should('have.length', 2)
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 101')
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 102')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: incidunt alias vel enim')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt')
    cy.fetchAlbumFour()
    cy.get('div.error-container').should('not.exist')
  });

  it('should show a circular loader after choosing an album, before rendering the photo cards', () => {
    cy.fetchAlbumThree()
    cy.get('form.form').find('input.form-input').type('3')
    cy.get('form.form').find('button.choose-button').click()
    cy.get('div.loader-container')
    cy.wait(1000)
    cy.get('div.loader-container').should('not.exist')
    cy.fetchAlbumFour()
    cy.get('form.form').find('input.form-input').type('4')
    cy.get('form.form').find('button.choose-button').click()
    cy.get('div.loader-container')
    cy.wait(1000)
    cy.get('div.loader-container').should('not.exist')
  });

  it.only('should properly validate user inputs', () => {
    cy.enterTripleDigitsStartingWithTwoZeros()
    cy.get('div.full-card-container').should('have.length', 2)
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 401')
    cy.get('div.full-card-container').find('h5.photo-id-text').contains('Photo ID: 402')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: I\'m from album 4')
    cy.get('div.full-card-container').find('p.photo-title-text').contains('Title: Yeah, I\'m also from album 4')
    cy.get('h3.album-number-message').contains('Photos From Album Number: 4')
    cy.enterTripleDigitsStartingAndEndingWithZero()
    cy.get('h3.album-number-message').contains('Photos From Album Number: 40')
    cy.get('div.full-card-container').should('have.length', 2)
    cy.enterTripleDigitsStartingWithSingleZero()
    cy.enterTripleDigitsStartingAndEndingWithZero()
    cy.get('h3.album-number-message').contains('Photos From Album Number: 44')
    cy.get('div.full-card-container').should('have.length', 2)
  });
}); // end describe block