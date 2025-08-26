// import { useState } from "react";
// import Marquee from "react-fast-marquee";
// import { useLocation, useNavigate } from "react-router-dom";

// const Layout = ({ children }) => {
//   const [mobileMenu, setMobilemenu] = useState(false);
//   const menu = [
//     {
//       label: "Home",
//       href: "/",
//     },
//     {
//       label: "Services",
//       href: "/services",
//     },
//     {
//       label: "Gallery",
//       href: "/gallery",
//     },
//     {
//       label: "Clients",
//       href: "/clients",
//     },
//   ];

//   const navigate = useNavigate();
//   const location = useLocation();
//   console.log(location);

//   const MobileNavigate = (href) => {
//     navigate(href);
//     setMobilemenu(false);
//   };
//   return (
//     <div className="w-full m-0 p-0  ">
//       <div className="w-[100%] max-w-[450px] mx-auto min-h-full  bg-[#FFF7F9]  ">
//         <div className=" ">
//           <header className="p-4 bg-[#FFB7CE] flex justify-between items-center shadow-lg sticky top-0 left-0 z-50 ">
//             <div className=" w-20 h-16 max-430:h-[50px] max-430:w-[60px] bg-black  rounded-full overflow-hidden object-cover  ">
//               <img
//                 src="images/logo.jpg"
//                 className="w-20 h-16 max-430:h-[50px] max-430:w-[50px]  rounded-full object-cover"
//                 alt=""
//               />
//             </div>
//             <Marquee className="font-bold text-xl">
//               Book your order now ! Direct message on
//               <i className="ri-instagram-line"></i> Instagram @ravina0333 |
//             </Marquee>

//             <button onClick={() => setMobilemenu(!mobileMenu)}>
//               <i className="ri-menu-3-line font-bold text-2xl"></i>
//             </button>
//           </header>

//           <div className="p-4">{children}</div>
//           <footer className="p-4 bg-[#FFB7CE] ">
//             <div className=" flex text-sm text-center space-x-2 justify-center font-semibold rounded-md  px-2 overflow-hidden">
//               {menu.map((item, index) => (
//                 <button
//                   key={index}
//                   style={{
//                     background:
//                       location.pathname === item.href
//                         ? "#FFB7CE"
//                         : "transparent",
//                   }}
//                   className=" hover:shadow-lg px-[12px] py-2"
//                   onClick={() => MobileNavigate(item.href)}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
//             <div className="mt-4">
//               <p className="text-center font-semibold text-[14px]">
//                 Designed & Developed by Bhavesh sutar
//               </p>
//               <p className="text-[10px] text-center">
//                 &copy; 2024-2025 Bhavesh Sutar. All rights reserved.
//               </p>
//             </div>
//           </footer>
//         </div>
//       </div>
//       <aside
//         className="overflow-hidden  md:hidden   text-left font-semibold bg-[#FFD7E3] shadow-lg   h-full fixed top-0 left-0 z-50 "
//         style={{
//           width: mobileMenu ? 250 : 0,
//           transition: ".3s",
//         }}
//       >
//         <div className="flex flex-col gap-6 p-4 relative">
//           <div
//             onClick={() => setMobilemenu(false)}
//             className="absolute rotate-45 text-2xl top-2 right-2 cursor-pointer hover:text-red-500"
//           >
//             +
//           </div>
//           {menu.map((item, index) => (
//             <button
//               key={index}
//               style={{
//                 background:
//                   location.pathname === item.href ? "#FFB7CE" : "transparent",
//               }}
//               className=" hover:shadow-md p-3    "
//               onClick={() => MobileNavigate(item.href)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </aside>
//     </div>
//   );
// };
// export default Layout;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [mobileMenu, setMobilemenu] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const menu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Clients",
      href: "/clients",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Auto-hide the popup after 10 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const MobileNavigate = (href) => {
    navigate(href);
    setMobilemenu(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full m-0 p-0 relative">
      {/* Popup Advertisement */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md mx-4 relative">
            <button 
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">Special Offer!</h3>
              <p className="mb-4">Book your order now! Direct message on Instagram</p>
              <div className="flex items-center justify-center mb-4">
                <i className="ri-instagram-line text-2xl text-pink-600 mr-2"></i>
                <span className="font-semibold">@ravina0333</span>
              </div>
              <button 
                onClick={closePopup}
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-[450px] mx-auto min-h-screen bg-white flex flex-col">
        <header className="p-4 bg-gradient-to-r from-pink-500 to-pink-400 flex justify-between items-center sticky top-0 left-0 z-40 shadow-md">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <img
              src="images/logo.jpg"
              className="w-full h-full object-cover"
              alt="Logo"
            />
          </div>
          
          <div className="flex-1 mx-4">
            <p className="text-white font-semibold text-sm text-center">
              Book now on Instagram <i className="ri-instagram-line"></i> @ravina0333
            </p>
          </div>

          <button 
            onClick={() => setMobilemenu(!mobileMenu)}
            className="text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
          >
            <i className="ri-menu-3-line text-xl"></i>
          </button>
        </header>

        <main className="flex-1 p-4 bg-gray-50">
          {children}
        </main>
        
        <footer className="p-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white">
          <div className="flex justify-center space-x-1 mb-4">
            {menu.map((item, index) => (
              <button
                key={index}
                style={{
                  background:
                    location.pathname === item.href
                      ? "rgba(255,255,255,0.2)"
                      : "transparent",
                }}
                className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                onClick={() => navigate(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-4 border-t border-white border-opacity-20 pt-4">
            <p className="text-center text-xs font-medium opacity-80">
              Designed & Developed by Bhavesh sutar
            </p>
            <p className="text-[10px] text-center opacity-60 mt-1">
              &copy; 2024-2025 Bhavesh Sutar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Mobile Menu */}
      <div
        className="overflow-hidden md:hidden text-left font-semibold bg-white shadow-xl h-full fixed top-0 left-0 z-50"
        style={{
          width: mobileMenu ? 250 : 0,
          transition: "0.3s ease",
        }}
      >
        <div className="flex flex-col gap-2 p-4 relative h-full">
          <button
            onClick={() => setMobilemenu(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-1"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
          
          <div className="mt-8">
            {menu.map((item, index) => (
              <button
                key={index}
                style={{
                  background:
                    location.pathname === item.href ? "#fdf2f8" : "transparent",
                  color: location.pathname === item.href ? "#ec4899" : "#4b5563",
                }}
                className="w-full text-left p-4 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors mb-1"
                onClick={() => MobileNavigate(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="mt-auto pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 p-4">
              &copy; 2024-2025 Bhavesh Sutar
            </p>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {mobileMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobilemenu(false)}
        ></div>
      )}
    </div>
  );
};

export default Layout;