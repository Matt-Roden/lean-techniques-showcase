import './App.css';
import Header from '../Header/Header';
import AlbumSearchForm from '../AlbumSearchForm/AlbumSearchForm';
import PhotosContainer from '../PhotosContainer/PhotosContainer';

const App = () => {
  return (
    <div>
      <Header />
      <AlbumSearchForm />
      <PhotosContainer />
    </div>
  );
}

export default App;