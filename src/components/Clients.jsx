import Layout from "./Layout";

const Clients = () => {
  const clients = [
    {
      href: "client/Baby1.jpg",
      review:
        "Ravina is a true professional! I loved my makeup and hairstyle, which lasted all day without a hitch. The products she used were of the highest quality, and her pricing is so reasonable. I’m so glad I found her, and I’ll definitely be back.",
    },
    {
      href: "client/bride.jpg",
      review:
        "Amazing experience! Ravina did such a wonderful job with my makeup and hairstyle. The products she used were all top-notch, and I felt confident and beautiful the entire day. Her services are so reasonable, making it an incredible value for the quality she provides.",
    },
    {
      href: "client/party.JPG",
      review:
        "Ravina Sutar is incredibly talented! She gave me the perfect look for my event, and the best part was how professional and gentle she was. She uses only professional products, and her rates are very budget-friendly. I’m extremely satisfied.",
    },
    {
      href: "client/sidder.jpg",
      review:
        "I had the best experience with Ravina! The makeup and hair looked flawless, and she was so friendly and accommodating. The products she used were all high-end, and yet her service was very reasonably priced. I’ll definitely be booking her again!",
    },
    {
      href: "client/sidder2.jpg",
      review:
        "Ravina Sutar did an outstanding job with my makeup and hairstyle! Everything was perfect, and she only used professional-grade products. Her pricing is so affordable for the quality of work she delivers. I’m one very happy client!",
    },
    {
      href: "client/sider3.jpg",
      review:"So impressed with Ravina’s work! She transformed my look and made me feel glamorous. I appreciated her use of professional products, which felt great on my skin. Her services are affordable, making her the perfect choice for anyone looking for quality without breaking the bank.",
    },
  ];
  return (
    <Layout>
      <div className="mt-4">
        <hr />
        <h2 className="font-medium text-lg p-2 text-slate-600">
          Happy clients
        </h2>
        <hr />
        <div   style={{ transition:".3s"}}> 
        {clients.map((item, index) => (
          <div
         
            key={index}
            className="p-4 flex flex-col items-center shadow-lg border-t-4 border-[#FFB7CE] rounded-md  mt-4 hover:bg-gradient-to-t hover:from-[#FFBFD3] hover:to-[#FFDFE9] duration-700 ease-out"
          >
            <div className="w-20 h-20 bg-black rounded-full overflow-hidden shadow-lg">
              <img src={item.href} alt="" />
            </div>
            <p className="text-center text-sm font-semibold p-2">
              {item.review}
            </p>
            
          </div>
          
        ))}
        </div>
      </div>
    </Layout>
  );
};
export default Clients;
