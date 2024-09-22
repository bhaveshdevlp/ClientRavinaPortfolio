import Layout from "./Layout"

const Gallery=()=>{
    const photos=[
        {
            href:"services/bride.jpg",
           
        },
        {
            href:"services/bride2.jpg",
           
        },
         {
            href:"services/bride3.jpg",

         },
         {
            href:"services/bride4.jpg",
         },
       
        {
            href:"services/Baby1.jpg",
  
        },
        {
            href:"services/baby2.JPG",
  
        },
        {
            href:"services/party.JPG",
        },
        {
            href:"services/party2.jpg",

        },
        {
            href:"services/sidder.jpg",
        },
        {
            href:"services/sidder2.jpg",    
        },
        {
            href:"services/sider3.jpg",    
        },
        {
            href:"services/sidder4.jpg",    
        },
        {

            href:"services/a.jpg"
        },
        {
            
            href:"services/b.jpg"
        },
        {
         
            href:"services/c.jpg"
        },
        
        {
      
            href:"services/d.webp"
        },
        {
      
            href:"services/e.webp"
        },
        {
      
            href:"services/f.webp"
        },


    ]
    return(
        <Layout>
            <div>
                <hr />
                <h1 className="font-semibold text-2xl p-2 mt-2">Gallery</h1>
                <hr />
            <div className="grid grid-cols-2  gap-4 mt-4">
              {
                  photos.map((item,index)=>(
                      <div className="shadow-lg rounded-md">
                        <img className="rounded-md transition-transform duration-300 hover:scale-110" src={item.href} alt="" />
                    </div>                   
                ))
            }
            </div>
            </div>
        </Layout>
    )
}
export default Gallery