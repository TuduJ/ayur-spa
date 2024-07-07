import React from 'react';
import { Col, Divider, Row } from 'antd';
import About_Us from "../image/about_us.png"

const AboutUs = () => {
    return (
        <div id='about' className='flex items-center jc-space-between sm-block'>
            <div className='pt-160 pl-120 pr-80 pb-180 sm-pt-36 sm-pl-40 sm-pr-40 sm-pb-36'>
                <h4 className='font-size-60 sm-font-size-30 pb-10 border-bottom-4 font-bold-500 font-gold font-family-petrona mb-20 mt-0'>About US</h4>
                <p className='font-size-24 sm-font-size-20 mt-40 font-bold-200 text-justify'>The founders of Ayur Sanjeevanam comes with over two decades of rich heritage of Ayurveda. Embarked on a mission over 15 years ago to redefine the Spa experience, and to make the benefits of Ayurveda accessible to people at an affordable price, we established the brand ‘Ayur Wellness & Spa’. We opened our first Spa for Men in Koramangala, in Bangalore City in the year 2009, and today we have grown to 6 locations in the City, served more than 2,00,000 guests in the past 15 years of our journey!</p>
                <p className='font-size-24 sm-font-size-20 mt-40 font-bold-200 text-justify'>With a Team of 60+ trained therapists and having a deep-seated belief in the transformative power of wellness, we have set out to create a heaven where our guests could escape the stresses of modern life and reconnect with their inner selves.</p>
            </div>
            <img src={About_Us} alt='sanjeevanam' className='sm-hidden'/>
        </div>
    );
};

export default AboutUs;