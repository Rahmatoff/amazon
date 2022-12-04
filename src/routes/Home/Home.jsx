import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main.jsx/Main';
import { useState,useEffect } from 'react';



const Home = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isNavbarSearchActive, setIsNavbarSearchActive] = useState(false);
  useEffect(() => {
    if(isSidebarActive || isNavbarSearchActive){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }


  }, [isSidebarActive, isNavbarSearchActive])
  return (
    <div>
              <Header/> 
              <HeroBanner/>
              <Main/>
              <Footer/>

    </div>
  )
}

export default Home;