import React from "react";
import { Container, Button, Col, Row, Dropdown } from "react-bootstrap";
import Mcase from "../assests/images/Apple.jpg";
// import { Data } from "../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css";

const Apple = () => {
  const products =useSelector((state)=>state.product.products);
  
  const stockData = products.slice(0, 3);

  return (
    <div>
      <Container className="main-heading">
        <h1>Apple Iphone</h1>
      </Container>
      <Container className="showcase-1">
        <div className="text">
          <h2>
            Apple <br />
            -20% <br />
            All phons
          </h2>
          <Button className="btn">Shop</Button>
        </div>

        <div>
          <img className="img" src={Mcase} alt=""></img>
        </div>
      </Container>

      <Container className="container">
        <Row className="row-img">
          <Col lg={3} md={6} sm={12}>
            <div className="seller-img1">
              <h5>
                Product
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>{" "}
              <h5>
                Price, $
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>{" "}
              <h5>
                Phone brand(Cases)
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>{" "}
              <h5>
                Colors(Cases)
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>
              <h5>
                Materials(watch)
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>
              <h5>
                Belt Colors
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>
              <h5>
                Watch Brand
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="icons"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div className="drop-product">
                          <div className="drop-item"></div>
                          <div className="drop-item"></div>
                          <div className="drop-item"></div>
                          <div className="drop-item"></div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </h5>
            </div>
          </Col>

          {stockData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to="/addtocart">
                  <img className="seller-img-cat" src={data.img} alt=""></img>
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
          {/* <img className="seller-img" src={Mcover} alt = "Img"></img> */}
        </Row>
      </Container>
      <Container className="container">
        <Row className="row-img">
          <Col lg={3} md={6} sm={12}>
            <div className="seller-img1"></div>
          </Col>
          {stockData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to="/addtocart">
                  <img className="seller-img-cat" src={data.img} alt=""></img>
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
          {/* <img className="seller-img" src={Mcover} alt = "Img"></img> */}
        </Row>
      </Container>
      <Container className="container">
        <Row className="row-img">
          <Col lg={3} md={6} sm={12}>
            <div className="seller-img1"></div>
          </Col>
          {stockData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to="/addtocart">
                  <img className="seller-img-cat" src={data.img} alt=""></img>
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
          {/* <img className="seller-img" src={Mcover} alt = "Img"></img> */}
        </Row>
      </Container>
      <Container className="container">
        <Row className="row-img">
          <Col lg={3} md={6} sm={12}>
            <div className="seller-img1"></div>
          </Col>
          {stockData.map((data, key) => {
            return (
              <Col lg={3} md={6} sm={12}>
                <Link to="/addtocart">
                  <img className="seller-img-cat" src={data.img} alt=""></img>
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
          {/* <img className="seller-img" src={Mcover} alt = "Img"></img> */}
        </Row>
      </Container>
    </div>
  );
};

export default Apple;
