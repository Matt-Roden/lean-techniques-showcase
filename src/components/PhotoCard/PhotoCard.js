import React from 'react'
import './PhotoCard.css'

const PhotoCard = ({ photoInfo }) => {
  return (
    <div className='full-card-container'>
      <div className='photo-container'>
        <img className='card-photo' src={photoInfo.url} alt='colorful placeholder'/>
      </div>
      <div className='photo-info-container'>
        <h5 className='photo-id-text card-text'>{`Photo ID: ${photoInfo.id}`}</h5>
        <p className='photo-title-text card-text'>{`Title: ${photoInfo.title}`}</p>
      </div>
    </div>
  )
}

export default PhotoCard
