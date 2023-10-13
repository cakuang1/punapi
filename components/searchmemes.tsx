import React, { useState, useEffect } from 'react';

const SearchMeme: React.FC = () => {
  const [images, setImages] = useState([]);

  function fetchBatch() {
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
  }

  useEffect(() => {
    // Fetch image URLs from your API
    fetchBatch();
  }, []);

  const handleRefresh = () => {
    fetchBatch();
  };

  return (
    <div>
            <div className="flex justify-center mt-4">
        <button
          onClick={handleRefresh}
          className="bg-gray-200 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Refresh
        </button>
      </div>
      <div className="bg-gray-100 mt-5">
        
        <div className="grid grid-cols-2 gap-4 p-4">
          {images.map((imageUrl, index) => (
            <div className="flex justify-center items-center w-full h-full" key={index}>
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SearchMeme;
