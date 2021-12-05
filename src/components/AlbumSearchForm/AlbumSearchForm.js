import React, { useState } from 'react'
import './AlbumSearchForm.css'

const AlbumSearchForm = ({ changeCurrentAlbumNumber }) => {
  const [value, setValue] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    changeCurrentAlbumNumber(value)
    resetForm()
  }

  const resetForm = () => {
    setValue('')
  }

  return (
    <div className='form-container'>
      <h3 className='form-message'>Select a Photo Album by Number (1-100)</h3>
      <form className='form'>
        <input 
          className='form-input'
          type='number'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          min='1'
          max='100'
          placeholder='...'
        />
        <button
          className='choose-button'
          onClick={(event) => handleClick(event)}
        >Choose Album</button>
      </form>
    </div>
  )
}

export default AlbumSearchForm