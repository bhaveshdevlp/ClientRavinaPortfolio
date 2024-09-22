import Layout from "./Layout";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useState } from "react";

const Home = () => {
  const [readMore, setReadMore] = useState(false);
  const toggleReadMore = () => {
    setReadMore(!readMore);
  };
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
    // {
    //     href:"services/bride3.jpg",
    //     label:"Bridal Makeup",
    //     description:"Let our professional makeup team create a bespoke bridal look for you, combining artistry and elegance to ensure you feel beautiful and unforgettable"
    // },
    // {
    //     href:"services/bride4.jpg",
    //     label:"Bridal Makeup",
    //     description:"Experience a magical transformation with our bridal makeup, featuring soft, romantic styles that enhance your features and capture the essence of your special day"
    // },
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
  ];

  const hairStyle = [
    {
      label: "Hair Style",
      href: "services/a.jpg",
    },
    {
      label: "Hair Style",
      href: "services/b.jpg",
    },
    {
      label: "Hair Style",
      href: "services/c.jpg",
    },
    {
      label: "Hair Style",
      href: "services/d.webp",
    },
  ];

  const clients = [
    {
      href: "client/Baby1.jpg",
      review: "Ravina is a true professional! I loved my makeup and hairstyle, which lasted all day without a hitch. The products she used were of the highest quality, and her pricing is so reasonable. I’m so glad I found her, and I’ll definitely be back.",
    },
    {
      href: "client/bride.jpg",
      review: "Amazing experience! Ravina did such a wonderful job with my makeup and hairstyle. The products she used were all top-notch, and I felt confident and beautiful the entire day. Her services are so reasonable, making it an incredible value for the quality she provides.",
    },
    {
      href: "client/party.JPG",
      review: "Ravina Sutar is incredibly talented! She gave me the perfect look for my event, and the best part was how professional and gentle she was. She uses only professional products, and her rates are very budget-friendly. I’m extremely satisfied.",
    },
    {
      href: "client/sidder.jpg",
      review: "I had the best experience with Ravina! The makeup and hair looked flawless, and she was so friendly and accommodating. The products she used were all high-end, and yet her service was very reasonably priced. I’ll definitely be booking her again!",
    },
    {
      href: "client/sidder2.jpg",
      review: "Ravina Sutar did an outstanding job with my makeup and hairstyle! Everything was perfect, and she only used professional-grade products. Her pricing is so affordable for the quality of work she delivers. I’m one very happy client!",
    },
    {
      href: "client/sider3.jpg",
      review: "Ravina is a true professional! I loved my makeup and hairstyle, which lasted all day without a hitch. The products she used were of the highest quality, and her pricing is so reasonable. I’m so glad I found her, and I’ll definitely be back!",
    },
  ];
  return (
    <Layout>
      <div className=" w-[100%]">
        {/* hero section */}
        <div className="flex flex-col items-center">
          <div className="  w-7/12 h-[230px] max-430:h-[180px] bg-black object-cover rounded-full overflow-hidden flex justi
          fy-center items-center shadow-lg object-cover ">
            
            <Swiper
              autoplay={true}
              pagination={true}
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img   src="profile/a.jpg " className="rounded-full p-4 mt-6 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img  src="profile/b.jpg" className="rounded-full mt-14  bg-black " />
              </SwiperSlide>
              <SwiperSlide>
                <img  src="profile/c.jpg" className="rounded-full " />
              </SwiperSlide>
              <SwiperSlide>
                <img  src="profile/d.jpg" className="rounded-full"  />
              </SwiperSlide>
            </Swiper>
          </div>
          <h1
            className="text-3xl mt-2 font-semibold "
            style={{
              fontFamily: "cursive",
            }}
          >
            Ravina Sutar
          </h1>
          <h1
            style={{
              fontFamily: "cursive",
            }}
            className=" text-xl text-center "
          >
            professional makeup & hair artist
          </h1>
          <p className=" p-4 text-center" style={{ fontFamily: "cursive" }}>
            Welcome to Ravina Sutar Makeovers – your one-stop makeover
            destination. Revered as the one of the best Makeup Artist and driven
            by an intense passion, we can help you achieve the look you want
          </p>

          <div className="w-[100%] shadow-lg rounded-md ">
            <Swiper
              autoplay={true}
              pagination={true}
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              speed="100"
            >
              <SwiperSlide>
                <img src="hero/a.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="hero/b.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="hero/c.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="hero/d.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* services section */}
        <div className="mt-4 ">
          <hr />
          <h1 className="font-semibold text-2xl p-2 mt-2">Services</h1>
          <hr />
          <h2 className="font-medium text-lg p-2 text-slate-600">
            Make up done
          </h2>
          <hr />
          {/* show services here */}
          <div className="grid grid-cols-2 gap-2 mt-2 ">
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
        </div>
        <div className="mt-4 ">
          <hr />
          <h2 className="font-medium text-lg p-2 text-slate-600">
            Hair styles done
          </h2>
          <hr />
          {/* show services here */}
          <div className="grid grid-cols-2 gap-2 mt-2 ">
            {hairStyle.map((item, index) => (
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
              </div>
            ))}
          </div>
        </div>
        {/* client section */}
        <div className="mt-4">
        <hr />
          <h2 className="font-medium text-lg p-2 text-slate-600">
            Happy clients
          </h2>
          <hr />
          {
            clients.map((item,index)=>(

              <div key={index} className="p-2 flex flex-col items-center shadow-lg border-t-4 border-[#FFB7CE] rounded-md  mt-4 hover:bg-gradient-to-t hover:from-[#FFBFD3] hover:to-[#FFDFE9] duration-700 ease-out ">
                <div className="w-20 h-20 bg-black rounded-full overflow-hidden shadow-lg">
                  <img src={item.href} alt="" />
                </div>
                <p className="text-center text-sm font-semibold p-2">
                  {item.review}
                </p>
              </div>
              
            ))
          }
         
          
        </div>
      </div>
    </Layout>
  );
};
export default Home;
