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

  const changeCurrentAlbumNumber = (id) => {
    if(id === currentAlbumNumber) {
      return
    } else {
      setIsLoading(true)
      setCurrentAlbumNumber(id)
    } 
  }

  useEffect(() => {
    getPhotosByAlbum(currentAlbumNumber).then(data => setPhotos(data))
    .then(setIsLoading(false))
  }, [currentAlbumNumber])

  return (
    <div>
      <Header />
      <AlbumSearchForm changeCurrentAlbumNumber={changeCurrentAlbumNumber}/>
      {!isLoading ? <PhotosContainer photos={photos} currentAlbumNumber={currentAlbumNumber}/> : <Loader />}
    </div>
  );
}

export default App;