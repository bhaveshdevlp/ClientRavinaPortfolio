import Layout from "./Layout";
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('https://ravinaclientasfdfdhgtv.vercel.app/api/images');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  // Handle image click (mobile only)
  const handleImageClick = (image) => {
    if (isMobile) {
      setSelectedImage(image);
    }
  };

  // Close full-screen preview
  const closePreview = () => {
    setSelectedImage(null);
  };

  const categories = [
    'All', 'Party Makeup', "Sider Makeup",
    "Baby Shower Makeup", "Hair Styling",
    'Bridal Makeup', 'Editorial Makeup',
    'Special Effects', 'Everyday Look'
  ];

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-pink-700 mb-2">Makeup Portfolio</h1>
            <p className="text-gray-600">Browse our collection of makeup artistry</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category 
                    ? 'bg-pink-600 text-white'
                    : 'bg-white text-pink-600 border border-pink-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 3-column square grid gallery */}
          <div className="grid grid-cols-3 gap-2">
            {filteredImages.map(image => (
              <div
                key={image._id}
                className="aspect-square bg-gray-200 rounded-md overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>

        {/* Full-screen preview for mobile */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 md:hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute top-4 left-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm opacity-80">{selectedImage.category}</p>
              </div>
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
