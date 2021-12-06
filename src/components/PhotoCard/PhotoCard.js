import React, { useEffect, useRef } from 'react'
import './PhotoCard.css'
import { gsap } from 'gsap'

const PhotoCard = ({ photoInfo }) => {
  let card = useRef(null);
  let pic = useRef(null);
  let infoContainer = useRef(null)

  useEffect(() => {
    gsap.from([card, pic, infoContainer], {
      opacity: 0, 
      duration: 1
    });
  }, [])

  return (
    <div className='full-card-container' ref={el => card = el }>
      <div className='photo-container'>
        <img 
          className='card-photo' 
          src={photoInfo.url} 
          alt='colorful placeholder'
          ref={el => pic = el }  
        />
      </div>
      <div className='photo-info-container' ref={el => infoContainer = el }>
        <h5 className='photo-id-text card-text'>{`Photo ID: ${photoInfo.id}`}</h5>
        <p className='photo-title-text card-text'>{`Title: ${photoInfo.title}`}</p>
      </div>
    </div>
  )
}

export default PhotoCard
