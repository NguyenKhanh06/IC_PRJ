import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import Programs from './Programs';
import News from './News';
import About from './About';
import Footer from '../../components/footer/Footer';
import Messenger from '../chat/messenger';


home.propTypes = {
    
};

function home(props) {
    return (
        <>
            <Header/>
            <Programs/>
            <News/>
            <About/>
            <Messenger/>
            <Footer/>
        </>
    );
}

export default home;