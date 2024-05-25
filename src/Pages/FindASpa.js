import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FindASpa = () => {
    return (
        <>
            <Header/>
            <div className='mt-100'>
                <div className='services-bg flex jc-center items-center '>
                    <p className='font-size-80 font-bold-500 font-white text-center font-family-petrona'>FIND A SPA</p>
                </div>
                <div className='pt-100 pl-117 pr-127 pb-82'>
                    <p className='mt-40 font-size-34 font-bold-200 text-justify cursor-pointer' onClick={() => window.open("https://www.google.com/maps/place/Kashayam+Ayurveda/@12.9207519,77.6177617,17z/data=!3m2!4b1!5s0x3bae14f184a38e91:0x3b21d09bd29b925!4m6!3m5!1s0x3bae15cdb4b6824d:0x194f90d1b2656b76!8m2!3d12.9207467!4d77.6203366!16s%2Fg%2F11f9zz70zt?entry=ttu")}>1.    Kashayam Ayurveda, #131, Near Silk board flyover & Opp Madiwala Bus stop, Madiwala, Hosur Main Road, Bangalore – 560068. <br/>Contact - +91 7795643045</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify cursor-pointer' onClick={() => window.open("https://www.google.com/maps/place/Spa+Ayur+-+Kormangala/@12.9462872,77.5408058,12.72z/data=!4m6!3m5!1s0x3bae156e2a3639a7:0x2bb9064defd15fa5!8m2!3d12.9381535!4d77.6290147!16s%2Fg%2F11syr01q4y?entry=ttu")}>2.    Ayur Wellness & Spa, Ground floor, Naveen Terrace Apartment, 100 feet road, 4th Block, Koramangala, Bangalore – 560034. <br/>Contact - +91 9741144576</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify cursor-pointer' onClick={() => window.open("https://www.google.com/maps/place/Ayur+Wellness+%26+Spa/@12.9099856,77.6844887,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1351565768a1:0x7aeda3ee2eb3abff!8m2!3d12.9099804!4d77.6870636!16s%2Fg%2F11p74rmkm5?entry=ttu")}>3.    Ayur Wellness & Spa, KNR Building, 83/14, Doddakanelli, Sarjapura Road, Bangalore – 560035. <br/>Contact - +91 9741346661</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify cursor-pointer' onClick={() => window.open("https://www.google.com/maps/place/Namana+Garden/@12.8925795,77.6100955,20.99z/data=!4m6!3m5!1s0x3bae14d8e4bce883:0xb839ecc039c797e9!8m2!3d12.8925129!4d77.6102844!16s%2Fg%2F1tlqnf7h?entry=ttu")}>4.    Ayur Wellness & Spa, Near Vijaya Bank colony signal, Opp Namana Garden restaurant, Bilekkahalli, Bangalore – 560029. <br/>Conatct - +91 7676316273</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify cursor-pointer' onClick={() => window.open("")}>5.    Ayur Wellness & Spa, 3rd floor, Liki Reddy Arcade (Sketchers Showroom building), HAL Old airport road, Marathahalli, Bangalore – 560037. <br/>Contact - +91 7259844863</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify cursor-pointer' onClick={() => window.open("")}>6.    Ayur Wellness & Spa, No 36/7, 2nd floor, LG Arcade, Narayanapura cross, Geddalahalli, Kothanur, Bangalore – 560077. <br/>Contact - +91 6364980777</p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default FindASpa;