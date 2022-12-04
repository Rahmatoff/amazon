import React, { useState, useEffect, useRef } from 'react';
import c from './HeroBanner.module.css';
import {FcNext} from 'react-icons/fc';
import {GrPrevious, GrNext} from 'react-icons/gr';

const HeroBanner = () => {
  const carouselWrapperEl = useRef();
    const [currentImages, setCurrentImages] = useState(0)
    const images = [
        "https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg",
        'https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg'
    ];

    const swipeLeft = () =>{
        if (currentImages > 0) {
          setCurrentImages(currentImages => currentImages - 1);
        }else{
          setCurrentImages(images.length -1);
        }
    }

    const swipeRight = () =>{
      if (currentImages < images.length -1) {
        setCurrentImages(currentImages => currentImages + 1);
      }else{
        setCurrentImages(0);
      }
  }

  useEffect( () => {
      carouselWrapperEl.current.scrollLeft = currentImages * carouselWrapperEl.current.offsetWidth;   
  }, [currentImages])


    
  return (
    <div className={c.carousel}>
        <button className={c.carouselButton} onClick={swipeLeft} ><GrPrevious className={c.icon} /></button>
        <div className={c.carouselWrapper} ref={carouselWrapperEl}>
            {
            images.map((carouselItem, index) =>
                <div key={index}> 
                    <img className={c.carouselItem} src={carouselItem} />
                </div>
              )
            }
        </div>
       <button className={c.carouselButton} onClick={swipeRight} ><GrNext className={c.icon}/></button>
    </div>
  )
}

export default HeroBanner;


