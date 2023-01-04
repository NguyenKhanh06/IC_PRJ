import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/style.css'

Header.propTypes = {
    
};

function Header(props) {
    return (
    
     <>
        <header class="app-header">
      <nav className="navbar navbar-expand-lg navbar-light header-app">
        <img
          src="https://daihoc.fpt.edu.vn/wp-content/uploads/2021/12/Logo-FU-01-200.png"
          className="navbar-brand"
        />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Programs</a>
            </li>
          </ul>
          <li className="header__navbar-item header__navbar-user">
            <a className="nav-link" href="#">Login</a>
{/* 
           <img
              src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/319636696_543414471136146_1672434171953617978_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-_EOYEzHAMoAX9WMd4w&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfDSBvuB5hJDDmZIpn8C9mKN-4lIXso-SxpAu8NVfg5CUA&oe=63B7098C"
              alt=""
              className="header__navbar-user-img"
            />
            <span className="header__navbar-user-name"
              >Nguyen Cong Khanh (K13 HCM)</span
            >

            <ul className="header__navbar-user-menu">
              <li className="header__navbar-user-item">
                <a href="">My account</a>
              </li>
              <li
                className="header__navbar-user-item header__navbar-user-item--seprate"
              >
                <a className="log-out" href="">Log out</a>
              </li>
            </ul>  */}
          </li>
        </div>
      </nav>
</header>
<div class="home-container">
      <div id="slider">
        <div class="text-content">
          <h3 class="text-heading">YOUR GLOBAL JOURNEYSTARTS HERE</h3>
          <div class="text-description">
            <button class="btn-app btn--primary_big">Register now</button>
          </div>
        </div>
      </div>
    </div>
     </>
    );
}

export default Header;