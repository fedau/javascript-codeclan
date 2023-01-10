import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About"
import Home from "./components/Home"
import Pricing from "./components/Pricing"



const App = ()=> {
  
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pricing" element={<Pricing/>}/>

    </Routes>
   </Router>
  )

}

export default App;
