import React from 'react';
import './footer.css'
import '../../styles/style.css'



function Footer(props) {
    return (
        <footer class="footer-app">
        <img class="img-footer" src="https://daihoc.fpt.edu.vn/wp-content/uploads/2021/12/Logo-FU-01-200.png" alt=""/>
     <ul>
      <li><i class="fa-solid fa-location-pin"></i>Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
      </li>
      <li><i class="fa-solid fa-phone"></i>+84 24 6291 5066</li>
      <li><i class="fa-solid fa-envelope"></i>FPT@gmail.com</li>
     </ul>
   <ul class="footer-media">
    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
   </ul>
    </footer>
    );
}

export default Footer;