import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home'; 
import Signup from './signup/Signup';
import Products from './products/Products';
import ProductInfo from './product-info/ProductInfo';
import Login from "./login/Login";
import NotFound from './notfound/Notfound';
import { Switch } from 'react-router-dom';

const index = () => {
  return (
    <>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path="/signup">
                <Signup/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/seemore/products">
                <Products />
            </Route>
            <Route exact path="/seemore/products/:productId">
                <ProductInfo />
            </Route>
            <Route exact path="*">
                <NotFound/>
            </Route>
      </Switch> 
    </>
  )
}

export default index;