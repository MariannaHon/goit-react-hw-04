import { useState } from 'react'
// import axios from "axios";
import './App.css'

import { fetchImagesWithSearch } from './image-api.js'
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchImages = async (search) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesWithSearch(search);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      < SearchBar onSearch={fetchImages} />
      {loading && (<p>Loading data, please wait...</p>)}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>)}
      {images.length > 0 && (<ImageGallery items={images} />)}
      <h1>Find your picture</h1>
    </div>
  )
}

export default App
