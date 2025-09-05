// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Gallery from './Gallery';

// // Cloudinary configuration
// const CLOUD_NAME = 'dt1nn4l0o';
// const UPLOAD_PRESET = 'revina_upload';

// const Admin = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadedImages, setUploadedImages] = useState([]);
//   const [imageData, setImageData] = useState({
//     title: '',
//     category: '',
//     description: ''
//   });
//   const [deleting, setDeleting] = useState(false);
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();

//   // Check if user is authenticated
//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (!token) {
//       navigate('/admin/login');
//     }
//   }, [navigate]);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('adminToken');
//     navigate('/admin/login');
//   };

//   // Handle file selection
//   const handleFileSelect = (event) => {
//     const files = Array.from(event.target.files);
//     const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
//     if (imageFiles.length > 0) {
//       setSelectedFiles(prev => [...prev, ...imageFiles]);
//     }
//   };

//   // Remove selected file
//   const removeFile = (index) => {
//     setSelectedFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   // Handle form input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setImageData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Delete image from backend
//   const deleteImage = async (imageId, publicId) => {
//     if (!window.confirm('Are you sure you want to delete this image?')) {
//       return;
//     }

//     setDeleting(true);
    
//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await fetch(`http://localhost:5000/api/images/${imageId}`, {
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (response.ok) {
//         setUploadedImages(prev => prev.filter(img => img._id !== imageId));
//         alert('Image deleted successfully');
//       } else {
//         alert('Error deleting image');
//       }
//     } catch (error) {
//       console.error('Error deleting image:', error);
//       alert('Error deleting image');
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // Upload to Cloudinary
//   const uploadToCloudinary = async () => {
//     if (selectedFiles.length === 0) return;
    
//     setUploading(true);
//     setUploadProgress(0);
    
//     for (let i = 0; i < selectedFiles.length; i++) {
//       const file = selectedFiles[i];
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('upload_preset', UPLOAD_PRESET);
      
//       try {
//         // Upload to Cloudinary
//         const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
//           method: 'POST',
//           body: formData,
//         });
        
//         const data = await response.json();
        
//         if (data.secure_url) {
//           // Save to our backend
//           const token = localStorage.getItem('adminToken');
//           const saveResponse = await fetch('http://localhost:5000/api/images', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Bearer ${token}`
//             },
//             body: JSON.stringify({
//               title: imageData.title || file.name,
//               category: imageData.category,
//               description: imageData.description,
//               url: data.secure_url,
//               public_id: data.public_id
//             }),
//           });
          
//           if (saveResponse.ok) {
//             const savedImage = await saveResponse.json();
//             setUploadedImages(prev => [...prev, savedImage]);
//           }
//         }
        
//         // Update progress
//         setUploadProgress(((i + 1) / selectedFiles.length) * 100);
        
//       } catch (error) {
//         console.error('Error uploading image:', error);
//       }
//     }
    
//     setSelectedFiles([]);
//     setImageData({
//       title: '',
//       category: '',
//       description: ''
//     });
    
//     setUploading(false);
//   };

//   // Fetch images on component mount
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const token = localStorage.getItem('adminToken');
//         const response = await fetch('http://localhost:5000/api/images', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         if (response.ok) {
//           const images = await response.json();
//           setUploadedImages(images);
//         } else if (response.status === 401) {
//           // Token is invalid, redirect to login
//           localStorage.removeItem('adminToken');
//           navigate('/admin/login');
//         }
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };
    
//     fetchImages();
//   }, [navigate]);
//   // Categories for the makeup images
//   const categories = [
//     "Party Makeup",
//     "Bridal Makeup",
//     "Sider Makeup",
//     "Baby Shower Makeup",
//     "Hair Styling",
//     "Editorial Makeup",
//     "Special Effects",
//     "Everyday Look",
//     "Vintage Style",
//     "Other"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-10">
//           <h1 className="text-3xl font-bold text-pink-700 mb-2">Makeup Portfolio Admin</h1>
//           <p className="text-gray-600">Upload and manage your makeup portfolio images</p>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-md p-6 mb-10">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Upload New Images</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div className="form-group">
//               <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={imageData.title}
//                 onChange={handleInputChange}
//                 placeholder="E.g., Glamorous Evening Look"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
//               />
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//               <select
//                 id="category"
//                 name="category"
//                 value={imageData.category}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
//               >
//                 <option value="">Select a category</option>
//                 {categories.map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={imageData.description}
//                 onChange={handleInputChange}
//                 placeholder="Describe the makeup look, techniques used, products, etc."
//                 rows="3"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
//               />
//             </div>
//           </div>
          
//           <div 
//             className="border-2 border-dashed border-pink-400 rounded-lg p-8 text-center cursor-pointer bg-pink-50 hover:bg-pink-100 transition-colors mb-6"
//             onClick={() => fileInputRef.current.click()}
//           >
//             <div className="flex flex-col items-center justify-center space-y-3">
//               <i className="fas fa-cloud-upload-alt text-4xl text-pink-600"></i>
//               <p className="text-lg font-medium text-gray-700">Click to select images</p>
//               <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP (Max 10MB each)</p>
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleFileSelect}
//               multiple
//               accept="image/*"
//               className="hidden"
//             />
//           </div>
          
//           {selectedFiles.length > 0 && (
//             <div className="mb-6">
//               <h3 className="text-lg font-medium text-gray-800 mb-3">Selected Files ({selectedFiles.length})</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                 {selectedFiles.map((file, index) => (
//                   <div key={index} className="relative border rounded-lg overflow-hidden shadow-sm">
//                     <img 
//                       src={URL.createObjectURL(file)} 
//                       alt={file.name} 
//                       className="w-full h-32 object-cover"
//                     />
//                     <button 
//                       onClick={() => removeFile(index)} 
//                       className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
//                     >
//                       <i className="fas fa-times text-gray-600"></i>
//                     </button>
//                     <div className="p-2">
//                       <p className="text-xs text-gray-700 truncate">{file.name}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
          
//           <button 
//             onClick={uploadToCloudinary} 
//             disabled={selectedFiles.length === 0 || uploading}
//             className={`w-full py-3 px-4 rounded-md text-white font-medium ${
//               selectedFiles.length === 0 || uploading 
//                 ? 'bg-gray-400 cursor-not-allowed' 
//                 : 'bg-pink-600 hover:bg-pink-700'
//             } transition-colors`}
//           >
//             {uploading ? `Uploading... ${Math.round(uploadProgress)}%` : 'Upload Images'}
//           </button>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Uploaded Images</h2>
//           {uploadedImages.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {uploadedImages.map((image) => (
//                 <div key={image._id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative">
//                   {/* Delete button */}
//                   <button
//                     onClick={() => deleteImage(image._id, image.public_id)}
//                     disabled={deleting}
//                     className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 z-10"
//                     title="Delete image"
//                   >
//                     <i className="fas fa-trash"></i>
//                   </button>
                  
//                   <img 
//                     src={image.url} 
//                     alt={image.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h4 className="font-medium text-gray-800 mb-1">{image.title}</h4>
//                     <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mb-2">
//                       {image.category}
//                     </span>
//                     <p className="text-sm text-gray-600">{image.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-8">No images uploaded yet.</p>
//           )}
//         </div>
//       </div>
    
//     </div>
//   );
// };

// export default Admin;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Gallery from './Gallery';

// Cloudinary configuration
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME
;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET

const Admin = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [imageData, setImageData] = useState({
    title: '',
    category: '',
    description: ''
  });
  const [deleting, setDeleting] = useState(false);
  const [showViewGalleryButton, setShowViewGalleryButton] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0) {
      setSelectedFiles(prev => [...prev, ...imageFiles]);
    }
  };

  // Remove selected file
  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setImageData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Delete image from backend
  const deleteImage = async (imageId, publicId) => {
    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

    setDeleting(true);
    
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`https://ravinaclient.vercel.app/api/images/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
         console.log(response)
      if (response.ok) {
        setUploadedImages(prev => prev.filter(img => img._id !== imageId));
        alert('Image deleted successfully');
      } else {
        alert('Error deleting image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      alert('Error deleting image');
    } finally {
      setDeleting(false);
    }
  };

  // Upload to Cloudinary
  const uploadToCloudinary = async () => {
    if (selectedFiles.length === 0) return;
    
    setUploading(true);
    setUploadProgress(0);
    
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);
      
      try {
        // Upload to Cloudinary
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
          method: 'POST',
          body: formData,
        });
        
        const data = await response.json();
        
        if (data.secure_url) {
          // Save to our backend
          const token = localStorage.getItem('adminToken');
          const saveResponse = await fetch('https://ravinaclient.vercel.app/api/images', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              title: imageData.title || file.name,
              category: imageData.category,
              description: imageData.description,
              url: data.secure_url,
              public_id: data.public_id
            }),
          });
          console.log(saveResponse)
          
          if (saveResponse.ok) {
            const savedImage = await saveResponse.json();
            setUploadedImages(prev => [...prev, savedImage]);
          }
        }
        
        // Update progress
        setUploadProgress(((i + 1) / selectedFiles.length) * 100);
        
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    
    setSelectedFiles([]);
    setImageData({
      title: '',
      category: '',
      description: ''
    });
    
    setUploading(false);
    setShowViewGalleryButton(true); // Show the View Gallery button after upload
  };

  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch('https://ravinaclient.vercel.app/api/images', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const images = await response.json();
          setUploadedImages(images);
          if (images.length > 0) {
            setShowViewGalleryButton(true);
          }
        } else if (response.status === 401) {
          // Token is invalid, redirect to login
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    
    fetchImages();
  }, [navigate]);

  // Navigate to Gallery
  const navigateToGallery = () => {
    navigate('/gallery');
  };

  // Categories for the makeup images
  const categories = [
    "Party Makeup",
    "Bridal Makeup",
    "Sider Makeup",
    "Baby Shower Makeup",
    "Hair Styling",
    "Editorial Makeup",
    "Special Effects",
    "Everyday Look",
    "Vintage Style",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-pink-700 mb-2">Makeup Portfolio Admin</h1>
            <p className="text-gray-600">Upload and manage your makeup portfolio images</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Upload New Images</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="form-group">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Image Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={imageData.title}
                onChange={handleInputChange}
                placeholder="E.g., Glamorous Evening Look"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                name="category"
                value={imageData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                name="description"
                value={imageData.description}
                onChange={handleInputChange}
                placeholder="Describe the makeup look, techniques used, products, etc."
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>
          
          <div 
            className="border-2 border-dashed border-pink-400 rounded-lg p-8 text-center cursor-pointer bg-pink-50 hover:bg-pink-100 transition-colors mb-6"
            onClick={() => fileInputRef.current.click()}
          >
            <div className="flex flex-col items-center justify-center space-y-3">
              <i className="fas fa-cloud-upload-alt text-4xl text-pink-600"></i>
              <p className="text-lg font-medium text-gray-700">Click to select images</p>
              <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP (Max 10MB each)</p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              multiple
              accept="image/*"
              className="hidden"
            />
          </div>
          
          {selectedFiles.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">Selected Files ({selectedFiles.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="relative border rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={file.name} 
                      className="w-full h-32 object-cover"
                    />
                    <button 
                      onClick={() => removeFile(index)} 
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                    >
                      <i className="fas fa-times text-gray-600"></i>
                    </button>
                    <div className="p-2">
                      <p className="text-xs text-gray-700 truncate">{file.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <button 
            onClick={uploadToCloudinary} 
            disabled={selectedFiles.length === 0 || uploading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              selectedFiles.length === 0 || uploading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-pink-600 hover:bg-pink-700'
            } transition-colors`}
          >
            {uploading ? `Uploading... ${Math.round(uploadProgress)}%` : 'Upload Images'}
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Uploaded Images</h2>
          {uploadedImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedImages.map((image) => (
                <div key={image._id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative">
                  {/* Delete button */}
                  <button
                    onClick={() => deleteImage(image._id, image.public_id)}
                    disabled={deleting}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 z-10"
                    title="Delete image"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 mb-1">{image.title}</h4>
                    <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No images uploaded yet.</p>
          )}
        </div>
      </div>
       <div className="flex justify-center items-center p-8 space-x-4">
            {showViewGalleryButton && (
              <button
                onClick={navigateToGallery}
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center"
              >
                <i className="fas fa-eye mr-2"></i> View Gallery
              </button>
            )}
            
          </div>
    </div>
  );
};

export default Admin;