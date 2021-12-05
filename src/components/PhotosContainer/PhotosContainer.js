import React from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import './PhotosContainer.css'

const PhotosContainer = ({ photos, currentAlbumNumber }) => {
  const photoCards = photos.map(photo => {
    return (
      <PhotoCard photoInfo={photo} key={photo.id}/>
    )
  })

  return (
    <div className='album-display-container'>
      {!currentAlbumNumber ? <></> : <h3 className='album-number-message'>{`Photos From Album Number: ${currentAlbumNumber}`}</h3>}
      <div className='photos-container'>
        {photoCards}
      </div>
    </div>
  )
}

export default PhotosContainer

// only show current album number when there is a a value for a current album number
// show separate message otherwise?

//<h3 className='album-number-message'>{`Photos From Album Number: ${currentAlbumNumber}`}</h3>