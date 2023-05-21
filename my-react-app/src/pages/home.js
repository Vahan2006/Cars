import React from 'react';
import "../style/index.css";
import Header from "../Components/header";
import PicBack from "../Components/pickBack";
import Slider from "../Components/slider";
import ProductData from '../ProductData/productData';

function header() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <React.StrictMode>
      <Header />
      <PicBack name = "Home Page" />
      <Slider items = {items}/>
      </React.StrictMode>
  );
}

export default header;
