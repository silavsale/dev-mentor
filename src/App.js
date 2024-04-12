import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ContactPage from './Components/ContactPage';
import Navbar from './Components/Navbar';
import SiteInfo from './Components/SiteInfo';
import Footer from './Components/Footer';
import AboutTheMentor from './Components/AboutTheMentor';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siteinfo" element={<SiteInfo />} />
        <Route path="/about" element={<AboutTheMentor />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
