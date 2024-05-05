import React from 'react';
import Home from '../components/Home';
import AboutUs from '../components/AboutUs';
import ServicePage from '../components/ServicePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeRoot = () => {
    return (
        <>
            <Header/>
            <Home/>
            <AboutUs/>
            <ServicePage/>
            <Footer/>     
        </>
    );
};

export default HomeRoot;