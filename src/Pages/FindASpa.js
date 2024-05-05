import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesImage from '../image/services_banner.png'

const FindASpa = () => {
    return (
        <>
            <Header/>
            <div className='mt-100'>
                <div className='relative'>
                    <img src={ServicesImage} alt='description banner' className='sanjeevanam-img'/>
                    <div className='services-bg flex jc-center items-center '>
                        <p className='font-size-80 font-bold-500 font-white text-center font-family-petrona'>FIND A SPA</p>
                    </div>
                </div>
                <div className='pt-100 pl-117 pr-127 pb-82'>
                    <p className='mt-40 font-size-34 font-bold-200 text-justify'>1.    Kashayam Ayurveda, #131, Near Silk board flyover & Opp Madiwala Bus stop, Madiwala, Hosur Main Road, Bangalore – 560068. <br/>Contact - +91 7795643045</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>2.    Ayur Wellness & Spa, Ground floor, Naveen Terrace Apartment, 100 feet road, 4th Block, Koramangala, Bangalore – 560034. <br/>Contact - +91 9741144576</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>3.    Ayur Wellness & Spa, KNR Building, 83/14, Doddakanelli, Sarjapura Road, Bangalore – 560035. <br/>Contact - +91 9741346661</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>4.    Ayur Wellness & Spa, Near Vijaya Bank colony signal, Opp Namana Garden restaurant, Bilekkahalli, Bangalore – 560029. <br/>Conatct - +91 7676316273</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>5.    Ayur Wellness & Spa, 3rd floor, Liki Reddy Arcade (Sketchers Showroom building), HAL Old airport road, Marathahalli, Bangalore – 560037. <br/>Contact - +91 7259844863</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>6.    Ayur Wellness & Spa, No 36/7, 2nd floor, LG Arcade, Narayanapura cross, Geddalahalli, Kothanur, Bangalore – 560077. <br/>Contact - +91 6364980777</p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default FindASpa;