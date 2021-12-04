import React from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import './PhotosContainer.css'

const PhotosContainer = ({ photos }) => {
  const photoCards = photos.map(photo => {
    return (
      <PhotoCard photoInfo={photo} key={photo.id}/>
    )
  })

  return (
    <div>
      {photoCards}
    </div>
  )
}

export default PhotosContainer