import React from 'react';
import collectionData from '../../dummy-data';
import ProductCard from '../product-card/ProductCard';
import c from './Main.module.css';
import { v4 as uuidv4 } from 'uuid';
import Books from '../booksbar/Books'
import ProductCardTwo from '../product-card/ProductCardTwo';
const Main = () => {
  return (
  <div className={c.main__inner}>
 
    <div className={c.main__wrapper}>
        {  
            collectionData.map(collectionItem =>
         <ProductCard key={uuidv4()} image = {collectionItem.image} title ={collectionItem.title}  link = {collectionItem.link} linkUrl ={collectionItem.linkUrl}/> )
        }
             <div className={c.mainsgn__wrapper}>
               <p>Sign in for the best experience</p>
               <button>Sign in curently</button>
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg" alt="" />
             </div>
    </div>
    <Books/>
    <ProductCardTwo/>

        <div className={c.signin}>
          <p>See personalized recommendations</p>
          <button>Sign in</button>
          <p>New customer? <span>Start here.</span></p>
        </div>

    </div>
  )
}

export default Main;


 