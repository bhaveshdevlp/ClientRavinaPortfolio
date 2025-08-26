// import Layout from "./Layout";
// import Marquee from "react-fast-marquee";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import { useState } from "react";

// const Home = () => {
//   const [readMore, setReadMore] = useState(false);
//   const toggleReadMore = () => {
//     setReadMore(!readMore);
//   };
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
//     // {
//     //     href:"services/bride3.jpg",
//     //     label:"Bridal Makeup",
//     //     description:"Let our professional makeup team create a bespoke bridal look for you, combining artistry and elegance to ensure you feel beautiful and unforgettable"
//     // },
//     // {
//     //     href:"services/bride4.jpg",
//     //     label:"Bridal Makeup",
//     //     description:"Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day"
//     // },
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
//   ];

//   const hairStyle = [
//     {
//       label: "Hair Style",
//       href: "services/a.jpg",
//     },
//     {
//       label: "Hair Style",
//       href: "services/b.jpg",
//     },
//     {
//       label: "Hair Style",
//       href: "services/c.jpg",
//     },
//     {
//       label: "Hair Style",
//       href: "services/d.webp",
//     },
//   ];

//   const clients = [
//     {
//       href: "client/Baby1.jpg",
//       review: "Ravina is a true professional! I loved my makeup and hairstyle, which lasted all day without a hitch. The products she used were of the highest quality, and her pricing is so reasonable. I’m so glad I found her, and I’ll definitely be back.",
//     },
//     {
//       href: "client/bride.jpg",
//       review: "Amazing experience! Ravina did such a wonderful job with my makeup and hairstyle. The products she used were all top-notch, and I felt confident and beautiful the entire day. Her services are so reasonable, making it an incredible value for the quality she provides.",
//     },
//     {
//       href: "client/party.JPG",
//       review: "Ravina Sutar is incredibly talented! She gave me the perfect look for my event, and the best part was how professional and gentle she was. She uses only professional products, and her rates are very budget-friendly. I’m extremely satisfied.",
//     },
//     {
//       href: "client/sidder.jpg",
//       review: "I had the best experience with Ravina! The makeup and hair looked flawless, and she was so friendly and accommodating. The products she used were all high-end, and yet her service was very reasonably priced. I’ll definitely be booking her again!",
//     },
//     {
//       href: "client/sidder2.jpg",
//       review: "Ravina Sutar did an outstanding job with my makeup and hairstyle! Everything was perfect, and she only used professional-grade products. Her pricing is so affordable for the quality of work she delivers. I’m one very happy client!",
//     },
//     {
//       href: "client/sider3.jpg",
//       review: "Ravina is a true professional! I loved my makeup and hairstyle, which lasted all day without a hitch. The products she used were of the highest quality, and her pricing is so reasonable. I’m so glad I found her, and I’ll definitely be back!",
//     },
//   ];
//   return (
//     <Layout>
//       <div className=" w-[100%]">
//         {/* hero section */}
//         <div className="flex flex-col items-center">
//           <div className="  w-7/12 h-[230px] max-430:h-[180px] bg-black object-cover rounded-full overflow-hidden flex justi
//           fy-center items-center shadow-lg object-cover ">
            
//             <Swiper
//               autoplay={true}
//               pagination={true}
//               modules={[Pagination, Autoplay]}
//               slidesPerView={1}
//             >
//               <SwiperSlide>
//                 <img   src="profile/a.jpg " className="rounded-full p-4 mt-6 bg-black" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img  src="profile/b.jpg" className="rounded-full mt-12  bg-black " />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img  src="profile/c.jpg" className="rounded-full " />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img  src="profile/d.jpg" className="rounded-full"  />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//           <h1
//             className="text-3xl mt-2 font-semibold "
//             style={{
//               fontFamily: "cursive",
//             }}
//           >
//             Ravina Sutar
//           </h1>
//           <h1
//             style={{
//               fontFamily: "cursive",
//             }}
//             className=" text-xl text-center "
//           >
//             professional makeup & hair artist
//           </h1>
//           <p className=" p-4 text-center" style={{ fontFamily: "cursive" }}>
//             Welcome to Ravina Sutar Makeovers – your one-stop makeover
//             destination. Revered as the one of the best Makeup Artist and driven
//             by an intense passion, we can help you achieve the look you want
//           </p>

//           <div className="w-[100%] shadow-lg rounded-md ">
//             <Swiper
//               autoplay={true}
//               pagination={true}
//               modules={[Pagination, Autoplay]}
//               slidesPerView={1}
//               speed="100"
//             >
//               <SwiperSlide>
//                 <img src="hero/a.jpg" alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="hero/b.jpg" alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="hero/c.jpg" alt="" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img src="hero/d.jpg" alt="" />
//               </SwiperSlide>
//             </Swiper>
//           </div>
//         </div>

//         {/* services section */}
//         <div className="mt-4 ">
//           <hr />
//           <h1 className="font-semibold text-2xl p-2 mt-2">Services</h1>
//           <hr />
//           <h2 className="font-medium text-lg p-2 text-slate-600">
//             Make up done
//           </h2>
//           <hr />
//           {/* show services here */}
//           <div className="grid grid-cols-2 gap-2 mt-2 ">
//             {makeup.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#FFDFE9] shadow-md rounded-md overflow-hidden"
//               >
//                 <img
//                   className="rounded-t-md w-full transition-transform duration-300 hover:scale-110"
//                   src={item.href}
//                   alt=""
//                 />
//                 <h1 className="px-2 font-semibold text-lg  ">{item.label}</h1>
//                 <p className="px-2 text-slate-800 text-sm py-0">
//                   {readMore
//                     ? `${item.description}`
//                     : `${item.description.substring(0, 40)}...`}
//                   <span
//                     onClick={toggleReadMore}
//                     className="text-blue-500 cursor-pointer"
//                   >
//                     {readMore ? " Read Less" : " Read More"}
//                   </span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="mt-4 ">
//           <hr />
//           <h2 className="font-medium text-lg p-2 text-slate-600">
//             Hair styles done
//           </h2>
//           <hr />
//           {/* show services here */}
//           <div className="grid grid-cols-2 gap-2 mt-2 ">
//             {hairStyle.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-[#FFDFE9] shadow-md rounded-md overflow-hidden"
//               >
//                 <img
//                   className="rounded-t-md w-full transition-transform duration-300 hover:scale-110"
//                   src={item.href}
//                   alt=""
//                 />
//                 <h1 className="px-2 font-semibold text-lg  ">{item.label}</h1>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* client section */}
//         <div className="mt-4">
//         <hr />
//           <h2 className="font-medium text-lg p-2 text-slate-600">
//             Happy clients
//           </h2>
//           <hr />
//           {
//             clients.map((item,index)=>(

//               <div key={index} className="p-2 flex flex-col items-center shadow-lg border-t-4 border-[#FFB7CE] rounded-md  mt-4 hover:bg-gradient-to-t hover:from-[#FFBFD3] hover:to-[#FFDFE9] duration-700 ease-out ">
//                 <div className="w-20 h-20 bg-black rounded-full overflow-hidden shadow-lg">
//                   <img src={item.href} alt="" />
//                 </div>
//                 <p className="text-center text-sm font-semibold p-2">
//                   {item.review}
//                 </p>
//               </div>
              
//             ))
//           }
         
          
//         </div>
//       </div>
//     </Layout>
//   );
// };
// export default Home;

import Layout from "./Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";


const Home = () => {
  const [activeService, setActiveService] = useState("bridal");
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const services = [
    {
      id: "bridal",
      title: "Bridal Makeup",
      description: "Enhance your natural beauty with our elegant bridal makeup, designed for a flawless and timeless look on your special day.",
      image: "services/bride.jpg"
    },
    {
      id: "baby",
      title: "Baby Shower Makeup",
      description: "Celebrate this special occasion with our baby shower makeup, designed to enhance your natural glow.",
      image: "services/Baby1.jpg"
    },
    {
      id: "party",
      title: "Party Makeup",
      description: "Get ready to turn heads with our party makeup, featuring bold and glamorous looks for any event.",
      image: "services/party.JPG"
    },
    {
      id: "sider",
      title: "Sider Makeup",
      description: "Let our professional makeup team create a bespoke look for you, combining artistry and elegance.",
      image: "services/sidder.jpg"
    },
    {
      id: "hairstyle",
      title: "Hairstyling",
      description: "Complete your look with our professional hairstyling services for any occasion.",
      image: "services/a.jpg"
    }
  ];

  const portfolioItems = [
    {
      href: "services/bride.jpg",
      category: "bridal",
      title: "Elegant Bridal Look"
    },
    {
      href: "services/bride2.jpg",
      category: "bridal",
      title: "Classic Bride"
    },
    {
      href: "services/Baby1.jpg",
      category: "baby",
      title: "Baby Shower Glow"
    },
    {
      href: "services/baby2.JPG",
      category: "baby",
      title: "Celebration Ready"
    },
    {
      href: "services/party.JPG",
      category: "party",
      title: "Glamorous Party Look"
    },
    {
      href: "services/party2.jpg",
      category: "party",
      title: "Night Out Special"
    },
    {
      href: "services/sidder.jpg",
      category: "sider",
      title: "Bespoke Look"
    },
    {
      href: "services/sidder2.jpg",
      category: "sider",
      title: "Romantic Transformation"
    },
    {
      href: "services/a.jpg",
      category: "hairstyle",
      title: "Elegant Updo"
    },
    {
      href: "services/b.jpg",
      category: "hairstyle",
      title: "Bridal Hair"
    },
    {
      href: "services/c.jpg",
      category: "hairstyle",
      title: "Modern Style"
    },
    {
      href: "services/d.webp",
      category: "hairstyle",
      title: "Classic Elegance"
    }
  ];

  const clients = [
    {
      href: "client/Baby1.jpg",
      review: "Ravina is a true professional! I loved my makeup and hairstyle, which lasted all day without a hitch.",
      name: "Priya M.",
      rating: 5
    },
    {
      href: "client/bride.jpg",
      review: "Amazing experience! Ravina did such a wonderful job with my makeup and hairstyle.",
      name: "Anjali S.",
      rating: 5
    },
    {
      href: "client/party.JPG",
      review: "Ravina Sutar is incredibly talented! She gave me the perfect look for my event.",
      name: "Neha R.",
      rating: 5
    },
    {
      href: "client/sidder.jpg",
      review: "I had the best experience with Ravina! The makeup and hair looked flawless.",
      name: "Sneha K.",
      rating: 5
    }
  ];

  // Achievement images from hero folder
  const achievements = [
    {
      image: "hero/a.jpg",
      title: "Award Winning Makeup Artist",
      description: "Recognized for excellence in bridal makeup artistry"
    },
    {
      image: "hero/b.jpg",
      title: "Certified Professional",
      description: "Trained and certified in the latest makeup techniques"
    },
    {
      image: "hero/c.jpg",
      title: "Featured in Magazines",
      description: "Our work has been featured in top beauty publications"
    },
    {
      image: "hero/d.jpg",
      title: "20+ Happy Brides",
      description: "Transformed over 100 brides on their special day"
    },
    {
      image: "hero/e.jpg",
      title: "5 Years of Experience",
      description: "Bringing beauty and confidence to clients since 2018"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="text-amber-400">★</span>
    ));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout>
      <div className="w-full overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-pink-200 rounded-full opacity-50 blur-xl"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src="profile/a.jpg" className="w-full h-full object-cover" alt="Ravina Sutar" />
              </div>
            </div>
            
            <div className="observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h1 className="text-5xl font-bold mb-4 font-playfair bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">Ravina Sutar</h1>
              <p className="text-xl mb-8 font-light text-gray-700">Professional Makeup & Hair Artist</p>
              <p className="text-lg mb-8 max-w-2xl mx-auto font-light text-gray-600">
                Welcome to Ravina Sutar Makeovers – where passion meets artistry to create your perfect look.
              </p>
              
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-rose-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h2 className="text-3xl font-bold mb-4 font-playfair">Achievements & Recognition</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Celebrating milestones and recognition in the beauty industry
              </p>
            </div>
            
            <div className="observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                className="achievement-swiper rounded-2xl overflow-hidden shadow-xl"
              >
                {achievements.map((achievement, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-96 md:h-[500px]">
                      <img 
                        src={achievement.image} 
                        alt={achievement.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">{achievement.title}</h3>
                          <p className="text-lg opacity-90">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={sectionRef} className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h2 className="text-3xl font-bold mb-4 font-playfair">Services Offered</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our range of professional makeup and hairstyling services tailored for your special occasions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Service List */}
              <div className="observe" style={{ opacity: 0, transform: 'translateX(-20px)' }}>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeService === service.id ? 'bg-gradient-to-r from-rose-50 to-pink-50 border-l-4 border-rose-500 shadow-md' : 'bg-gray-50 hover:bg-gray-100'}`}
                      onClick={() => setActiveService(service.id)}
                    >
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Service Image */}
              <div className="observe" style={{ opacity: 0, transform: 'translateX(20px)' }}>
                <div className="sticky top-24 h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={services.find(s => s.id === activeService)?.image} 
                    alt={activeService}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Portfolio Preview */}
            <div className="observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h3 className="text-2xl font-bold mb-8 text-center font-playfair">Portfolio Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {portfolioItems.slice(0, 4).map((item, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-xl group">
                    <img 
                      src={item.href} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <button   onClick={() => navigate('/gallery')} className="text-rose-600 hover:text-rose-700 font-medium flex items-center justify-center mx-auto">
                  View Full Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h2 className="text-3xl font-bold mb-4 font-playfair">Client Testimonials</h2>
              <p className="text-gray-600">See what my clients have to say about their experience</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 observe"
                  style={{ opacity: 0, transform: 'translateY(20px)', transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-rose-200">
                      <img src={client.href} alt={client.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{client.name}</h4>
                      <div className="flex">
                        {renderStars(client.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">"{client.review}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center observe" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Transform Your Look?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Book a consultation today and let's create something beautiful together
            </p>
            <button className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get in Touch
            </button>
          </div>
        </section>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .font-playfair {
            font-family: "Playfair Display", serif;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Home;