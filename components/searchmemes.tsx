
import React from 'react';
import { useState,useEffect } from 'react';


  const Searchmeme: React.FC = () => {
    const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch image URLs from your API
    fetch('/api/meme/batch')
      .then((response) => response.json())
      .then((data) => {
        if (data.memes) {
          setImages(data.memes);
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className="max-w-xs m-4"
        />
      ))}
    </div>
  );
};
  export default Searchmeme;