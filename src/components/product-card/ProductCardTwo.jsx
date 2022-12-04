import React from 'react';
import Product from '../../dummy- main-data.json';
import c from './Product.module.css'
import { v4 as uuidv4 } from 'uuid';

const ProductCardTwo = () => {
  return (
    <div className={c.main__wrapper}>
        {
            Product.map(ProductCard =>
                <div className={c.card__wrapper} key={uuidv4()}>
                    
                    <h2>{ProductCard.title}</h2>
                        <img className={c.card__image} src={ProductCard.images} alt="" />

                        <a href={ProductCard.linkUrl}>{ProductCard.link}</a>
                </div>
            )
                    


        }
    </div>
  )
}

export default ProductCardTwo;