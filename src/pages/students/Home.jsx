import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Programs from './Programs';
import News from './News';
import About from './About';
import Footer from '../../components/footer/Footer';



home.propTypes = {
    
};

function home(props) {
    return (
        <>
        <Header/>
        <div className="home-container">
      <div id="slider">
        <div className="text-content">
          <h3 className="text-heading">YOUR GLOBAL JOURNEYSTARTS HERE</h3>
          <div className="text-description">
            <button className="btn-app btn--primary_big">Register now</button>
          </div>
        </div>
      </div>
    </div>
            <Programs/>
            <News/>
            <About/>
            <Footer/>
        </>
    );
}

export default home;