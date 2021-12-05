import { cyan } from "@mui/material/colors"

Cypress.Commands.add('fetchAlbumThree', () => {
  cyan.intercept('GET', 'https://jsonplaceholder.typicode.com/photos?albumId=3', {
    statusCode: 200,
    body: [
      {
        "albumId": 3,
        "id": 101,
        "title": "incidunt alias vel enim",
        "url": "https://via.placeholder.com/600/e743b",
        "thumbnailUrl": "https://via.placeholder.com/150/e743b"
      },
      {
        "albumId": 3,
        "id": 102,
        "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
        "url": "https://via.placeholder.com/600/a393af",
        "thumbnailUrl": "https://via.placeholder.com/150/a393af"
      }
    ]
  })
  cy.get('form.form').find('input.form-input').type('3')
  cy.get('form.form').find('button.choose-button').click()
}); // end command
