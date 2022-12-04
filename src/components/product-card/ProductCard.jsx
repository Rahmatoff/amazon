import React from "react";
import {Link} from 'react-router-dom';
import collectionData from "../../dummy-data";
import c from "./Product.module.css";
import { v4 as uuidv4 } from 'uuid';

const ProductCard = ({ image, title, linkUrl, link}) => {
  return (
        <div className={c.card__wrapper}>
            <h2>{title}</h2>
            {
              typeof image === 'string' ? 
              <img className={c.cardImg__info} src={image} alt="" /> :
              <div className={c.productImageWrapper}>
                {
                image.map(productImage => 
                  <Link to={productImage.imageRedirect} className={c.productCardGridItem} key={uuidv4()}>
                    <img className={c.productImg} src={productImage?.imageURL} alt="" />
                    <small className={c.cardItemSmall}>{productImage.subtitle}</small>
                  </Link>
                  )
            }
                </div>
            }
             <a className={c.cardUrlLink}  href={linkUrl}>{link}</a>

        </div>
             
  );
};

export default ProductCard;


          

              
            
      
