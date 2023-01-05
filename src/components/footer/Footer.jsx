import React from 'react';
import './footer.css'
import '../../styles/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function Footer(props) {
    return (
        <footer className="footer-app">
        <img className="img-footer" src="https://daihoc.fpt.edu.vn/wp-content/uploads/2021/12/Logo-FU-01-200.png" alt=""/>
     <ul style={{textAlign: 'left'}}>
      <li><FontAwesomeIcon icon={faLocationPin} style={{fontSize: 20, marginRight: 10}} />Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
      </li>
      <li><FontAwesomeIcon icon={faPhone} style={{fontSize: 20, marginRight: 10}} />+84 24 6291 5066</li>
      <li><FontAwesomeIcon icon={faEnvelope} style={{fontSize: 20, marginRight: 10}} />FPT@gmail.com</li>
     </ul>
   <ul className="footer-media">
    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
    <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
   </ul>
    </footer>
    );
}

export default Footer;