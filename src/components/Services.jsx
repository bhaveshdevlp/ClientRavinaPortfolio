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
        "Whether it’s a night out or a special occasion, our party makeup will help you stand out with vibrant colors and a perfectly polished finish.",
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

  const hairStyle=[
    {
        label:"Hair Style",
        href:"services/a.jpg"
    },
    {
        label:"Hair Style",
        href:"services/b.jpg"
    },
    {
        label:"Hair Style",
        href:"services/c.jpg"
    },
    {
        label:"Hair Style",
        href:"services/d.webp"
    },
   
    {
        label:"Hair Style",
        href:"services/f.webp"
    },
    {
        label:"Hair Style",
        href:"services/d.webp"
    },
    
]

  const [readMore,setReadMore]=useState(false)
    const toggleReadMore=()=>{
        setReadMore(!readMore)
    }
  return (
    
    <Layout>
      <div>
        <hr />
        <h1 className="font-semibold text-2xl p-2 mt-2">
          Services provided by me
        </h1>
        <hr />
        <div className="grid grid-cols-2 gap-2 mt-4 ">
          {makeup.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFDFE9] shadow-md rounded-md overflow-hidden"
            >
              <img
                className="rounded-t-md w-full transition-transform duration-300 hover:scale-110"
                src={item.href}
                alt=""
              />
              <h1 className="px-2 font-semibold text-lg  ">{item.label}</h1>
              <p className="px-2 text-slate-800 text-sm py-0">
                {readMore
                  ? `${item.description}`
                  : `${item.description.substring(0, 40)}...`}
                <span
                  onClick={toggleReadMore}
                  className="text-blue-500 cursor-pointer"
                >
                  {readMore ? " Read Less" : " Read More"}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 ">
                   
                    <h2>Hair styles done</h2>
                    {/* show services here */}
                    <div className="grid grid-cols-2 gap-2 ">
                        {
                                  hairStyle.map((item,index)=>(
                                    <div key={index} className="bg-[#FFDFE9] shadow-md rounded-md overflow-hidden">
                                    <img className="rounded-t-md w-full transition-transform duration-300 hover:scale-110" src={item.href} alt="" />
                                    <h1 className="px-2 font-semibold text-lg  ">{item.label}</h1>
                                   
                                    </div>
                                ))
                        }                        
                    </div>
                </div>
      </div>
    </Layout>
  );
};
export default Services;
