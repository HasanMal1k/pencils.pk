import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HorizontalText from './Components/HorizontalText';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    
    <div className='bg-[#F0F8FF]'>
    <div className='min-h-screen '>
      <Navbar />
      <Hero/>
    </div>

    <HorizontalText/> 
    <Products/>
    <Footer/>
    </div>
  </React.StrictMode>
);
