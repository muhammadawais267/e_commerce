import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Apple from "./Components/Apple";
// import "~react-image-gallery/styles/css/image-gallery.css";

import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="apple" element={<Apple />} />
        <Route path="addtocart" element ={<Cart/>} ></Route>
        <Route path="/product/:name" element ={<ProductDetail/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
