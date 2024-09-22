import { useState } from "react";
import Marquee from "react-fast-marquee";
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const [mobileMenu, setMobilemenu] = useState(false);
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
  console.log(location);

  const MobileNavigate = (href) => {
    navigate(href);
    setMobilemenu(false);
  };
  return (
    <div className="w-full m-0 p-0  ">
      <div className="w-[100%] max-w-[450px] mx-auto min-h-full  bg-[#FFF7F9]  ">
        <div className=" ">
          <header className="p-4 bg-[#FFB7CE] flex justify-between items-center shadow-lg sticky top-0 left-0 z-50 ">
            <div className=" w-20 h-16 max-430:h-[50px] max-430:w-[60px] bg-black  rounded-full overflow-hidden object-cover  ">
              <img
                src="images/logo.jpg"
                className="w-20 h-16 max-430:h-[50px] max-430:w-[50px]  rounded-full object-cover"
                alt=""
              />
            </div>
            <Marquee className="font-bold text-xl">
              Book your order now ! Direct message on
              <i className="ri-instagram-line"></i> Instagram @ravina0333 |
            </Marquee>

            <button onClick={() => setMobilemenu(!mobileMenu)}>
              <i className="ri-menu-3-line font-bold text-2xl"></i>
            </button>
          </header>

          <div className="p-4">{children}</div>
          <footer className="p-4 bg-[#FFB7CE] ">
            <div className=" flex text-sm text-center space-x-2 justify-center font-semibold rounded-md  px-2 overflow-hidden">
              {menu.map((item, index) => (
                <button
                  key={index}
                  style={{
                    background:
                      location.pathname === item.href
                        ? "#FFB7CE"
                        : "transparent",
                  }}
                  className=" hover:shadow-lg px-[12px] py-2"
                  onClick={() => MobileNavigate(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-center font-semibold text-[14px]">
                Designed & Developed by Bhavesh sutar
              </p>
              <p className="text-[10px] text-center">
                &copy; 2024-2025 Bhavesh Sutar. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
      <aside
        className="overflow-hidden  md:hidden   text-left font-semibold bg-[#FFD7E3] shadow-lg   h-full fixed top-0 left-0 z-50 "
        style={{
          width: mobileMenu ? 250 : 0,
          transition: ".3s",
        }}
      >
        <div className="flex flex-col gap-6 p-4 relative">
          <div
            onClick={() => setMobilemenu(false)}
            className="absolute rotate-45 text-2xl top-2 right-2 cursor-pointer hover:text-red-500"
          >
            +
          </div>
          {menu.map((item, index) => (
            <button
              key={index}
              style={{
                background:
                  location.pathname === item.href ? "#FFB7CE" : "transparent",
              }}
              className=" hover:shadow-md p-3    "
              onClick={() => MobileNavigate(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};
export default Layout;
