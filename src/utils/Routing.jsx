import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Skill from '../pages/Skill'

function Routing() {
  return (
  
    <Routes>
    <Route path = "/Skill" element= {<Skill/>}/>
    </Routes>
  )
}

export default Routing;