import React from 'react';
import "../index.css";
import Header from "../Components/header";
import PicBack from "../Components/pickBack";
import Products from '../Components/product';

function products() {
  return (
    <React.StrictMode>
      <Header/>
      <PicBack name = "Products"/>
      <Products data = {[{"name":"Car1"}, {"name":"Car2"} ]}/>
    </React.StrictMode>
  );
}

export default products;