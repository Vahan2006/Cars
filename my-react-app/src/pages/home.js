import React from 'react';
import "../index.css";
import Header from "../Components/header";
import PicBack from "../Components/pickBack";
import Slider from "../Components/slider";

function header() {
  return (
    <React.StrictMode>
      <Header />
      <PicBack name = "Home Page" />
    </React.StrictMode>
  );
}

export default header;
