import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/home';
import About from '../views/about';
import Contact from '../views/contact';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element ={<About></About>}/>
      <Route path="/contact" element ={<Contact></Contact>}/>
    </Routes>
  );
}

export default AppRoutes;
