import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/sections/NavBar"
import Footer from "./components/sections/Footer"
import Mission from "./pages/Mission"
import Actions from "./pages/Actions"
import Contact from "./pages/Contact"
import Executifs from "./pages/Executifs"
import Coordinators from "./pages/Coordinators"
function App() {


  return (
    <>
    <BrowserRouter>

    <div className="min-h-screen">

    
     <NavBar />

     <Routes>
       <Route path="/" element={<Home/>} /> 
       <Route path="/mission" element={ <Mission /> } />
       <Route path="/actions"  element= { <Actions />}/>
        <Route path="/contact" element={ <Contact /> } />
        <Route  path="/executifs" element={ <Executifs/>} />

        <Route path="/coordinators" element={<Coordinators />} />
      </Routes>   
     

      <Footer />

      </div>

      </BrowserRouter>

    </>
  )
}

export default App
