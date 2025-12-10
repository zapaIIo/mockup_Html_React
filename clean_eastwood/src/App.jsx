import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import DetailsProduct from "./components/DetailsProduct/DetailsProduct"

function App() {


  return (
    <>
     
    <Router>
    <navbar />
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/producto/:id" element={<DetailsProduct />} /> 
    </Routes>
     </Router>

    </>
  )
}

export default App
