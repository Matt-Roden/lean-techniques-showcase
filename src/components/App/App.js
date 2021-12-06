import './App.css';
import Header from '../Header/Header';
import AlbumSearchForm from '../AlbumSearchForm/AlbumSearchForm';
import PhotosContainer from '../PhotosContainer/PhotosContainer';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import React, { useState, useEffect } from 'react'
import { getPhotosByAlbum } from '../../utils';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentAlbumNumber, setCurrentAlbumNumber] = useState('');
  const [photos, setPhotos] = useState([]);

  const validateId = (id) => {
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

  const changeCurrentAlbumNumber = (id) => {
    let validID = validateId(id)
    if (validID === currentAlbumNumber) {
      return
    } else if (validID <= 0 || validID > 100) {
      setIsError(true)
    } else {
      setIsError(false)
      setIsLoading(true)
      setCurrentAlbumNumber(validID)
    } 
  }

  useEffect(() => {
    setTimeout(() => {getPhotosByAlbum(currentAlbumNumber).then(data => setPhotos(data))
      .then(setIsLoading(false))}, 850)
  }, [currentAlbumNumber])

  return (
    <div className='App'>
      <Header />
      <AlbumSearchForm changeCurrentAlbumNumber={changeCurrentAlbumNumber}/>
      {isError ? <Error /> : <></> }
      {isLoading ? <Loader /> : <PhotosContainer photos={photos} currentAlbumNumber={currentAlbumNumber}/>}
    </div>
  );
}

export default App;