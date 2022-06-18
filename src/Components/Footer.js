import React from 'react'
import { Container } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css'


const Footer = () => {
  return (
    <div>
        <Container className='footer'>
            <div className='about-us'><h3>Essentials</h3>

            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Deliver</li>
            </ul>
            </div>
            <div className='infos'><h3>Infos</h3>
            <ul>
              <li>Shope by phone</li>
              <li>Collections</li>
              <li>How to design</li>
              <li>Shopping Info</li>
            </ul>
            </div>
            <div className='products'><h3>Products</h3>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Deliver</li>
            </ul>
            </div>
            <div className='others'><h3>Others</h3>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Deliver</li>
            </ul>
            </div>
            <div className='find'><h3>Find Us</h3>
            <ul>
              <li><FacebookIcon fontSize='large'/></li>
              <li><InstagramIcon fontSize='large'/></li>
              <li><TwitterIcon fontSize='large'/></li>
              
            </ul>
            </div>

        </Container>
    </div>
  )
}

export default Footer