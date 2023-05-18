import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Products from "./pages/products"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element = {<Home/>}></Route>
        <Route path="/products" element = {<Products/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
