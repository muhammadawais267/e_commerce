import { Button, Row, Col } from "react-bootstrap";
import React from "react";
import { Container } from "react-bootstrap";
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

import { Data } from "../data";
import "./Home.css";

const Home = () => {
  console.log(Data);
  const stockData = Data.slice(0, 4);
  const imgData = Data.slice(4, 8);
  const catdata = Data.slice(8, 12);
  const catData1 = Data.slice(12, 16);
  console.log(stockData);

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
          <h2>Custom Case</h2>
          <img src={Case2} alt="" />
        </div>

        <div className="watches">
          {" "}
          <h2>Wrist Watches</h2>
          <img src={Watch} alt=""></img>
        </div>
      </Container>
<Container>

      <h1>Best Sellers</h1>
</Container>
      <Container className="container">
        <Row className="row-img">
          {stockData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to={`/product/${data.id}`}>
                  <img className="seller-img" src={data.img} alt=""></img>
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
          {imgData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to="/addtocart">
                  <img className="seller-img" src={data.img} alt=""></img>
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
      <Container>
        <Row className="row-img">
          {catdata.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to="/addtocart">
                  <img className="seller-img" src={data.img} alt=""></img>
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
                <Link to="/addtocart">
                  <img className="seller-img" src={data.img} alt=""></img>
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
