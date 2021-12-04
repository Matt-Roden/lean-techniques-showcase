import React from 'react'
import './Header.css'
import photoLogo from '../../images/photoLogo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-and-text-container'>
        <img 
          className='logo'
          src={photoLogo}
          alt='app logo, polaroids'
        />
        <h2>My Photo Albums</h2>
      </div>
    </header>
  )
}

export default Header
