import React from "react";
// import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import {
  Search,
  PermIdentity,
  WorkOutline,
  FavoriteBorder,
  KeyboardArrowDown,
} from "@mui/icons-material";
import "./Home.css";
import Logo from "../assests/images/logo1.png";
import { Link } from "react-router-dom";

const Header = () => {
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

          <div className="work">
            <WorkOutline />
          </div>

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
