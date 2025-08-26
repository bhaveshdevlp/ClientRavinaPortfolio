import "../App.css";
// import { useState } from "react";
// import Layout from "./Layout";

// const Services = () => {
//   const makeup = [
//     {
//       href: "services/bride.jpg",
//       label: "Bridal Makeup",
//       description:
//         "Enhance your natural beauty with our elegant bridal makeup, designed for a flawless and timeless look on your special day.",
//     },
//     {
//       href: "services/bride2.jpg",
//       label: "Bridal Makeup",
//       description:
//         "Our expert artists specialize in creating exquisite bridal makeup that lasts all day, ensuring you look radiant and confident as you walk down the aisle.",
//     },
//     {
//       href: "services/bride3.jpg",
//       label: "Bridal Makeup",
//       description:
//         "Let our professional makeup team create a bespoke bridal look for you, combining artistry and elegance to ensure you feel beautiful and unforgettable",
//     },
//     {
//       href: "services/bride4.jpg",
//       label: "Bridal Makeup",
//       description:
//         "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
//     },
//     {
//       href: "services/Baby1.jpg",
//       label: "Baby shower Makeup",
//       description:
//         "Celebrate this special occasion with our baby shower makeup, designed to enhance your natural glow and make you feel radiant as you gather with loved ones",
//     },
//     {
//       href: "services/baby2.JPG",
//       label: "Baby shower Makeup",
//       description:
//         "Get ready for your baby shower with our expert makeup application, featuring a light and elegant style that complements your celebration and leaves you feeling fabulous.",
//     },
//     {
//       href: "services/party.JPG",
//       label: "Party Makeup",
//       description:
//         "Get ready to turn heads with our party makeup, featuring bold and glamorous looks that will make you shine at any event.",
//     },
//     {
//       href: "services/party2.jpg",
//       label: "Party Makeup",
//       description:
//         "Whether it’s a night out or a special occasion, our party makeup will help you stand out with vibrant colors and a perfectly polished finish.",
//     },
//     {
//       href: "services/sidder.jpg",
//       label: "Sider Makeup",
//       description:
//         "Let our professional makeup team create a bespoke bridal look for you, combining artistry and elegance to ensure you feel beautiful and unforgettable.",
//     },
//     {
//       href: "services/sidder2.jpg",
//       label: "Sider Makeup",
//       description:
//         "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
//     },
//     {
//       href: "services/sider3.jpg",
//       label: "Sider Makeup",
//       description:
//         "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
//     },
//     {
//       href: "services/sidder4.jpg",
//       label: "Sider Makeup",
//       description:
//         "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
//     },
//   ];

//   const hairStyle=[
//     {
//         label:"Hair Style",
//         href:"services/a.jpg"
//     },
//     {
//         label:"Hair Style",
//         href:"services/b.jpg"
//     },
//     {
//         label:"Hair Style",
//         href:"services/c.jpg"
//     },
//     {
//         label:"Hair Style",
//         href:"services/d.webp"
//     },
   
//     {
//         label:"Hair Style",
//         href:"services/f.webp"
//     },
//     {
//         label:"Hair Style",
//         href:"services/d.webp"
//     },
    
// ]

//   const [readMore,setReadMore]=useState(false)
//     const toggleReadMore=()=>{
//         setReadMore(!readMore)
//     }
//   return (
    
//     <Layout>
//       <div>
//         <hr />
//         <h1 className="font-semibold text-2xl p-2 mt-2">
//           Services provided by me
//         </h1>
//         <hr />
//         <div className="grid grid-cols-2 gap-2 mt-4 ">
//           {makeup.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#FFDFE9] shadow-md rounded-md overflow-hidden"
//             >
//               <img
//                 className="rounded-t-md w-full transition-transform duration-300 hover:scale-110"
//                 src={item.href}
//                 alt=""
//               />
//               <h1 className="px-2 font-semibold text-lg  ">{item.label}</h1>
//               <p className="px-2 text-slate-800 text-sm py-0">
//                 {readMore
//                   ? `${item.description}`
//                   : `${item.description.substring(0, 40)}...`}
//                 <span
//                   onClick={toggleReadMore}
//                   className="text-blue-500 cursor-pointer"
//                 >
//                   {readMore ? " Read Less" : " Read More"}
//                 </span>
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-4 ">
                   
//                     <h2>Hair styles done</h2>
//                     {/* show services here */}
//                     <div className="grid grid-cols-2 gap-2 ">
//                         {
//                                   hairStyle.map((item,index)=>(
//                                     <div key={index} className="bg-[#FFDFE9] shadow-md rounded-md overflow-hidden">
//                                     <img className="rounded-t-md w-full transition-transform duration-300 hover:scale-110" src={item.href} alt="" />
//                                     <h1 className="px-2 font-semibold text-lg  ">{item.label}</h1>
                                   
//                                     </div>
//                                 ))
//                         }                        
//                     </div>
//                 </div>
//       </div>
//     </Layout>
//   );
// };
// export default Services;

import { useState } from "react";
import Layout from "./Layout";

const Services = () => {
  const makeup = [
    {
      href: "services/bride.jpg",
      label: "Bridal Makeup",
      description:
        "Enhance your natural beauty with our elegant bridal makeup, designed for a flawless and timeless look on your special day.",
    },
    {
      href: "services/bride2.jpg",
      label: "Bridal Makeup",
      description:
        "Our expert artists specialize in creating exquisite bridal makeup that lasts all day, ensuring you look radiant and confident as you walk down the aisle.",
    },
    {
      href: "services/bride3.jpg",
      label: "Bridal Makeup",
      description:
        "Let our professional makeup team create a bespoke bridal look for you, combining artistry and elegance to ensure you feel beautiful and unforgettable",
    },
    {
      href: "services/bride4.jpg",
      label: "Bridal Makeup",
      description:
        "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
    },
    {
      href: "services/Baby1.jpg",
      label: "Baby shower Makeup",
      description:
        "Celebrate this special occasion with our baby shower makeup, designed to enhance your natural glow and make you feel radiant as you gather with loved ones",
    },
    {
      href: "services/baby2.JPG",
      label: "Baby shower Makeup",
      description:
        "Get ready for your baby shower with our expert makeup application, featuring a light and elegant style that complements your celebration and leaves you feeling fabulous.",
    },
    {
      href: "services/party.JPG",
      label: "Party Makeup",
      description:
        "Get ready to turn heads with our party makeup, featuring bold and glamorous looks that will make you shine at any event.",
    },
    {
      href: "services/party2.jpg",
      label: "Party Makeup",
      description:
        "Whether it's a night out or a special occasion, our party makeup will help you stand out with vibrant colors and a perfectly polished finish.",
    },
    {
      href: "services/sidder.jpg",
      label: "Sider Makeup",
      description:
        "Let our professional makeup team create a bespoke bridal look for you, combining artistry and elegance to ensure you feel beautiful and unforgettable.",
    },
    {
      href: "services/sidder2.jpg",
      label: "Sider Makeup",
      description:
        "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
    },
    {
      href: "services/sider3.jpg",
      label: "Sider Makeup",
      description:
        "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
    },
    {
      href: "services/sidder4.jpg",
      label: "Sider Makeup",
      description:
        "Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day",
    },
  ];

  const hairStyle = [
    {
      label: "Hair Style",
      href: "services/a.jpg"
    },
    {
      label: "Hair Style",
      href: "services/b.jpg"
    },
    {
      label: "Hair Style",
      href: "services/c.jpg"
    },
    {
      label: "Hair Style",
      href: "services/d.webp"
    },
    {
      label: "Hair Style",
      href: "services/f.webp"
    },
    {
      label: "Hair Style",
      href: "services/d.webp"
    },
  ];

  const [readMoreStates, setReadMoreStates] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const toggleReadMore = (index) => {
    setReadMoreStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openPreview = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  // Function to apply optimal image adjustments based on content
  // const getImageStyle = (href, label) => {
  //   // Apply different treatments based on image content
  //   if (href.includes('bride3.jpg') || href.includes('bride4.jpg') || 
  //       href.includes('sidder2.jpg') || href.includes('sidder3.jpg') || 
  //       href.includes('sidder4.jpg')) {
  //     // For images where faces need enhancement
  //     return {
  //       filter: 'brightness(110%) contrast(115%) saturate(120%)',
  //       objectPosition: 'center 30%'
  //     };
  //   } else if (href.includes('Baby1.jpg') || href.includes('baby2.JPG')) {
  //     // For baby shower images
  //     return {
  //       filter: 'brightness(105%) contrast(110%)',
  //       objectPosition: 'center center'
  //     };
  //   } else if (href.includes('party.JPG') || href.includes('party2.jpg')) {
  //     // For party makeup images
  //     return {
  //       filter: 'brightness(108%) contrast(112%)',
  //       objectPosition: 'center center'
  //     };
  //   }
    
  //   // Default style
  //   return {
  //     filter: 'brightness(100%) contrast(100%)',
  //     objectPosition: 'center center'
  //   };
  // };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-8 px-4 sm:px-6 lg:px-8">
        {/* Image Preview Modal */}
        {previewImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                className="absolute -top-10 right-0 text-white text-3xl z-10"
                onClick={closePreview}
              >
                &times;
              </button>
              <img 
                src={previewImage} 
                alt="Preview" 
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          </div>
        )}

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of professional makeup and hairstyling services designed to enhance your natural beauty for any occasion.
          </p>
        </div>

        {/* Makeup Services Section */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-10">
            <div className="flex-grow h-px bg-pink-200"></div>
            <h2 className="text-3xl font-semibold text-pink-800 px-6">Makeup Services</h2>
            <div className="flex-grow h-px bg-pink-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makeup.map((item, index) => {
             // const imageStyle = getImageStyle(item.href, item.label);
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden group cursor-pointer" onClick={() => openPreview(item.href)}>
                    <img
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      src={item.href}
                      alt={item.label}
                      //style={imageStyle}
                    />
                    <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.label}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.label}</h3>
                    <p className="text-gray-600 mb-4">
                      {readMoreStates[index] 
                        ? item.description 
                        : `${item.description.substring(0, 80)}...`}
                    </p>
                    <button
                      onClick={() => toggleReadMore(index)}
                      className="text-pink-600 font-medium hover:text-pink-800 transition-colors"
                    >
                      {readMoreStates[index] ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Hair Style Services Section */}
        <section>
          <div className="flex items-center justify-center mb-10">
            <div className="flex-grow h-px bg-pink-200"></div>
            <h2 className="text-3xl font-semibold text-pink-800 px-6">Hair Styling</h2>
            <div className="flex-grow h-px bg-pink-200"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairStyle.map((item, index) => {
             // const imageStyle = getImageStyle(item.href, item.label);
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden group cursor-pointer" onClick={() => openPreview(item.href)}>
                    <img
                      className="w-full h-full object-cover object-center-top    transition-transform duration-500 group-hover:scale-105"
                      src={item.href}
                      alt={item.label}/>
                    <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.label}
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
                    <p className="text-gray-600 mt-2">Professional hairstyling for any occasion</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action Section */}
        <div className="text-center mt-16 bg-pink-50 rounded-2xl p-8 shadow-inner">
          <h2 className="text-2xl font-bold text-pink-700 mb-4">Ready to Transform Your Look?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your appointment today and let our expert team create the perfect look for your special occasion.
          </p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;