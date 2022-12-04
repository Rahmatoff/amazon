import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import c from "./Products.module.css";
import Header from '../../components/header/Header'

const Products = () => {
  
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/v2/allproducts")
      .then(response => setAllProductsData(response.data))
      .catch(err => console.log(err))
  }, [])

   return (
    <div >
      <Header/>
    <div className={c.NewProductRoute} >
      {
        allProductsData.map(product => 
          <div className={c.newProductWrapper}>
          <Link style={{textDecoration: "none"}} to={`/seemore/products/${product._id}`} key={product._id}>
            <img className={c.newProductImg} src={product?.image[0]?.url} alt="" />
            <p className={c.ProductLik}>{product.name}</p>
            {
            product.ratings % 1 === 0 ?
              new Array(product.ratings).fill("#").map(() => 
                <BsStarFill className={c.ProductStar} key={uuidv4()}/>
              ) : 
              <>
              { 
                new Array(Math.floor(product.ratings)).fill("#").map(() => 
                    <BsStarFill className={c.ProductStar} key={uuidv4()}/>
                )
              }
              <BsStarHalf className={c.ProductStar}/>
              </>
            }
            <p className={c.productPrice}>${product.price}</p>
          </Link>  
          </div>
        )
      }
    </div>
    </div>
  )
}

export default Products