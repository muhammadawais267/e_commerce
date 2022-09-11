import { Button, Row, Col } from "react-bootstrap";
import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Cover from "../assests/images/Cover.jpg";
import Cover1 from "../assests/images/Cover1.jpg";
import Cover2 from "../assests/images/Cover2.jpg";
import Cover3 from "../assests/images/Cover3.jpg";
import Watch1 from "../assests/images/Watch.jpg";
import Watch2 from "../assests/images/Watch1.jpg";
import Watch3 from "../assests/images/Watch2.jpg";
import Watch4 from "../assests/images/Watch3.jpg";
import Cover4 from "../assests/images/Cover4.jpg";
import Case2 from "../assests/images/Case2.png";
import Mcase from "../assests/images/CasePic.jpg";
import Watch from "../assests/images/watch.png";
import { Link } from "react-router-dom";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/Actions/product";

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products);
  const stockData = products.slice(0, 4);
  const imgData = products.slice(4, 8);
  const catdata = products.slice(8, 12);
  const catData1 = products.slice(12, 16);

  console.log("produscc", products)

  // const getData = async () => {
  //   const dbProducts = await axios.get('http://localhost:5000/api/productdata')
  //   console.log("producrs", dbProducts.data)
  
  // }
      useEffect(() => {
        dispatch(getAllProducts())
      }, [])
  
  
  return (
    <div>
      <Container className="showcase">
        <div className="text">
          <h2>
            Personalized <br />
            phone cases <br />
            for your phone
          </h2>
          <Button className="btn">Shop</Button>
        </div>

        <div>
          <img className="img" src={Mcase} alt=""></img>
        </div>
      </Container>
      <Container className="cases">
        <div className="custom-cases">
          <h2>Custom Cases</h2>
          <img className="case-img" src={Case2} alt="" />
        </div>

        <div className="watches">
          {" "}
          <h2>Wrist Watches</h2>
          <img className="wach-img" src={Watch} alt=""></img>
        </div>
      </Container>
      <Container>
        <h1>Best Sellers</h1>
      </Container>

      {/* First Row */}
      <Container className="container">
        <Row className="row-img">
          {stockData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to={`/product/${data._id}`}>
                  <img className="seller-img" src={data.file && data.file} alt=""></img>
                </Link>

                <p className="text-precentage">-30%</p>
                <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                </div>
                <p className="cat-name">{data.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* Second Row */}
      <Container className="container">
        <Row className="row-img">
          {imgData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to={`/product/${data.id}`}>
                  <img className="seller-img" src={data.file} alt=""></img>
                </Link>

                <p className="text-precentage">-30%</p>
                <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                </div>
                <p className="cat-name">{data.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Third Row */}
      

      <Container className="showcase">
        <div className="text">
          <h2>
            Personalized <br />
            phone cases <br />
            for your phone
          </h2>
          <Button className="btn">Shop</Button>
        </div>

        <div>
          <img className="img" src={Mcase} alt=""></img>
        </div>
      </Container>

      {/* Fourth Row */}
      <Container>
        <Row className="row-img">
          {catdata.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to={`/product/${data.id}`}>
                  <img className="seller-img" src={data.file} alt=""></img>
                </Link>

                <p className="text-precentage">-30%</p>
                <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                </div>
                <p className="cat-name">{data.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container>
        <Row className="row-img">
          {catData1.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to={`/product/${data.id}`}>
                  <img className="seller-img" src={data.file} alt=""></img>
                </Link>

                <p className="text-precentage">-30%</p>
                <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                </div>
                <p className="cat-name">{data.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="showcase">
        <div className="text">
          <h2>
            Personalized <br />
            phone cases <br />
            for your phone
          </h2>
          <Button className="btn">Shop</Button>
        </div>

        <div>
          <img className="img" src={Mcase} alt=""></img>
        </div>
      </Container>
      <div className="more">
        <Button className="btn-more">Show More</Button>
      </div>
      <Container>
        <div className="img-row">
          <div className="img-col">
            <img className="cover-img" src={Watch2} alt=""></img>
            <img className="cover-img1" src={Cover} alt=""></img>
            <img className="cover-img2" src={Cover1} alt=""></img>
          </div>
          <div className="img-col">
            <img className="cover-img3" src={Cover2} alt=""></img>
            <img className="cover-img4" src={Cover3} alt=""></img>
            <img className="cover-img5" src={Watch4} alt=""></img>
          </div>
          <div className="img-col">
            <img className="cover-img6" src={Watch3} alt=""></img>
            <img className="cover-img7" src={Watch1} alt=""></img>
            <img className="cover-img8" src={Cover4} alt=""></img>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
