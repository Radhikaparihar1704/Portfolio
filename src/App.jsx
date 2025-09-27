import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Skill from './pages/Skill';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="projects"><Project /></section>
              <section id="contact"><Contact /></section>
            </div>
          }
        />
        <Route path="/skill" element={<Skill />} />
      </Routes>
      </>
  );
}

export default App;

