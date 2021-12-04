import React from 'react'
import './Loader.css'
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div>
      <CircularProgress sx={{ color: '#743837' }}/>
    </div>
  )
}

export default Loader
