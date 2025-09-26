import React from 'react'
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Routing from './utils/Routing';


function App() {
  return (
    <>
    <Navbar/>
    <Routing/>
    <section  id="home"><Home /></section>
    <section  id="about"><About /></section>
    <section  id="projects"><Project /></section>
    <section  id="contact"><Contact /></section>
    </>
  )
}
export default App;

