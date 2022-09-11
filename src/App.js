import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Apple from "./Components/Apple";
import Userdetails from "./Components/Userdetails";
import Dashboard from "./Components/Dashboard";
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
        <Route path="cart" element ={<Cart/>} ></Route>
        <Route path="/product/:id" element ={<ProductDetail/>} ></Route>
        <Route path="userdetails" element ={<Userdetails/>} ></Route>
        <Route path="dashboard" element = {<Dashboard/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
