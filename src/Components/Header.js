/* eslint-disable array-callback-return */
import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
import { Badge, Menu } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Container, Table , Dropdown} from "react-bootstrap";
import {
  Search,
  PermIdentity,
  ShoppingCart,
  FavoriteBorder,
  KeyboardArrowDown,
  Close,
} from "@mui/icons-material";
import "./Home.css";
import Logo from "../assests/images/logo1.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DLT } from "../redux/Actions/product";
import { useEffect } from "react";

const Header = () => {
  const getData = useSelector((state) => state.product.additems);

  const [price, setPrice] = useState(0);
  console.log("Price", price);

  const dispatch = useDispatch();

  //DELETE DATA
  const del = (id) => {
    dispatch(DLT(id));
  };

  // Total Cost
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = ()=>{
    let price = 0;
    getData.map((ele,k)=>{
        price = ele.price * ele.qnty + price
    });
    setPrice(price);
};
  useEffect(() => {
    total();
  }, [total]);
  

  // console.log("DATA", getData)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
const [formData, setFormData] = useState({

})


  return (
    <div>
      <Container className="container">
        <div className="logo">
          <img src={Logo} alt="Logo"></img>
          <h3>easycase</h3>
        </div>
        <div className="search">
          <input placeholder="Search" />
          <Search sx={{ color: "grey" }} fontSize="large" />
        </div>
        <div className="profile">
          <div className="ident">
            <PermIdentity />
          </div>
          <Dropdown>
                    <Dropdown.Toggle style = {{backgroundColor:'#fff', color:'#000', border:'none', marginRight:'15px'}}></Dropdown.Toggle>

                    <Dropdown.Menu >
                      <Dropdown.Item  href="#/action-1"><Link to="/" style={{listStyle:'none',textDecoration:'none'}}>Home</Link></Dropdown.Item>
                      <Dropdown.Item href="#/action-2"><Link to="/dashboard">Dashboard</Link></Dropdown.Item>
                      
                    </Dropdown.Menu>
                  </Dropdown>

          <div className="work">
            <Badge
              badgeContent={getData.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ShoppingCart />
            </Badge>
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to="/cart" onClick={handleClose}>
                              <img
                                src={e.img}
                                style={{ width: "5rem", height: "5rem" }}
                                alt=""
                              />
                            </Link>
                          </td>
                          <td>
                            <p>Price : {e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => del(e.id)}
                            >
                              <Delete />
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <p className="text-center">Total $: {price}</p>
              </Table>
            </div>{" "}
            <Close   onClick={handleClose} style = {{position:"absolute",top:2,right:20,cursor:'pointer', fontSize:23}}/>
          </Menu>

          <div className="heart">
            <FavoriteBorder />
          </div>
        </div>
      </Container>
      <Container>
        <div className="Navbar">
          <ul>
            <li className="dropdown">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/apple">Apple</Link>
            </li>
            <li>
              <Link to="/apple">Huawei</Link>
            </li>
            <li>
              <Link to="/apple">Honor</Link>
            </li>
            <li>
              <Link to="/apple">Xiaomi</Link>
            </li>
            <li>
              <Link to="/apple">Motorolla</Link>
            </li>
            <li>
              <Link to="/apple">Custom Cases</Link>
            </li>
            <li>
              <Link to="/apple">Watch</Link>
            </li>
            <li>
              <Link to="/apple">Sony</Link>
            </li>

            <p>
              EN
              <KeyboardArrowDown />
            </p>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
