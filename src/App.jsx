import { BrowserRouter,Routes,Route } from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import Home from "./components/Home"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Clients from "./components/Clients"
import Admin from "./components/Admin"



const App=()=>{
  return(
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/clients" element={<Clients />}/>


            <Route path="/adminR" element={<Admin />}/>
            
            
            


          </Routes>  
      </BrowserRouter>
  )
}
export default App