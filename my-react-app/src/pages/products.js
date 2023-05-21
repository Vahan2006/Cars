import React from 'react';
import Header from "../Components/header";
import PicBack from "../Components/pickBack";
import Products from '../Components/product';
import ProductData from '../ProductData/productData';

function products() {
  console.log(<ProductData/>)
  return (
    <React.StrictMode>
      <Header/>
      <PicBack name = "Products"/>
      <Products data = {ProductData}/>
    </React.StrictMode>
  );
}

export default products;