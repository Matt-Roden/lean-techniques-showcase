export const getPhotosByAlbum = (albumId) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  .then(response => checkForErrors(response))
}

const checkForErrors = (response) => {
  if(!response.ok) {
    throw new Error(`Oops, looks like something went wrong... Please try again.`)
  } else {
    return response.json()
  }
}