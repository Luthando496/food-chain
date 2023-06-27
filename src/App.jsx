import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import SinglePage from './pages/SinglePage';




function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>


      <Footer />

      
      
    </>
  )
}

export default App
