
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/products" element = {<Products/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
