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

  });

  it('should display an error message when the user inputs an invalid number into the form', () => {

  });
}); // end describe block