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
  const [currentAlbumNumber, setCurrentAlbumNumber] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotosByAlbum(1).then(data => console.log(data))
  }, [])

  return (
    <div>
      <Header />
      <AlbumSearchForm />
      <PhotosContainer />
    </div>
  );
}

export default App;

// state: 
// - currentAlbumNumber - starts out as null
// - photos - starts out empty array
// - isLoading - starts out false
// - isError - starts out false

// when the form passes back a number after submit,
// app will append the number to the url being fetched in the utils file
// the response will be set into photos state
// photos will get passed down to PhotosContainer
// Photos container will map through the photos prop and build each PhotoCard
// every time that the form data changes (user picks a new number), 
// All of the photos should update