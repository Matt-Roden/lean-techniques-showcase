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
    <div>
      <h3>{`Photos From Album Number ${currentAlbumNumber}`}</h3>
      {photoCards}
    </div>
  )
}

export default PhotosContainer

// only show current album number when there is a a value for a current album number
// show separate message otherwise?