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

export const validateId = (id) => {
  let splitId = id.split('')
  if (splitId.length === 2 && splitId[0] === '0' && splitId[1] !== '0') {
    splitId.shift()
    let result = splitId.join()
    return result
  } else if (splitId.length === 3 && splitId[0] === '0' && splitId[1] === '0' && splitId[2] === '0') {
    return '0'
  } else if (splitId.length === 3 && splitId[0] === '0' && splitId[1] === '0' && splitId[2] !== '0') {
    splitId.splice(0,2) 
    let result = splitId.join()
    return result
  } else if (splitId.length === 3 && splitId[0] === '0' && splitId[1] !== '0' && splitId[2] !== '0') {
    splitId.shift()
    let result = splitId.join('')
    return result
  } else if (splitId.length === 3 && splitId[0] === '0' && splitId[1] !== '0' && splitId[2] === '0') {
    splitId.shift()
    let result = splitId.join('')
    return result
  } else {
    return id
  }
}