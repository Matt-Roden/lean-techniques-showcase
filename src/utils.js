export const getPhotosByAlbum = (albumId) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  .then(response => response.json())
}