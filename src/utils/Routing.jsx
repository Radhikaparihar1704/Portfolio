import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../Pages/About';
import Contact from '../pages/Contact';
import Project from '../pages/Project';

function Routing() {
  return (
  
    <Routes>
    <Route path = "/" element= {<Home />}/>
    <Route path = "/About" element= {<About />}/>
    <Route path = "/Contact" element= {<Contact />}/>
    <Route path = "/Project" element= {<Project />}/>
    </Routes>
  )
}

export default Routing;