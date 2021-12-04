import './App.css';
import Header from '../Header/Header';
import AlbumSearchForm from '../AlbumSearchForm/AlbumSearchForm';
import PhotosContainer from '../PhotosContainer/PhotosContainer';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

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