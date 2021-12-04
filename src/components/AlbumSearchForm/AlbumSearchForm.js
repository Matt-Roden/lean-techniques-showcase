import React, { useState } from 'react'
import './AlbumSearchForm.css'

const AlbumSearchForm = ({ changeCurrentAlbumNumber }) => {
  const [value, setValue] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    console.log('VALUE: ', value)
    changeCurrentAlbumNumber(value)
  }

  const resetForm = () => {
    
  }

  return (
    <div>
      <h3>Select a Photo Album by Number (1-100)</h3>
      <form>
        <input 
          className='album-input'
          type='number'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          min='1'
          max='100'
        />
        <button
          onClick={(event) => handleClick(event)}
        >Choose Album</button>
      </form>
    </div>
  )
}

export default AlbumSearchForm

//props: function for appending value to fetching function and updating state in app

// state: 
// - value - string/number

// number input, value = state value, on change will set the state value
// button, handleClick will send the input value into fetching method that will request photos from that number album
