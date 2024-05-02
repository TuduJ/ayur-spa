import React from 'react';
import Home1 from "../image/home_header_1.png"
import Home2 from "../image/home_header_2.png"
import Home3 from "../image/home_header_3.png"
import Sanjeevanam from "../image/ayur_sanjeevanam.png"
import Take_Break from "../image/take_break.png"
import { Carousel, Col, Divider, Row } from 'antd';

const Home = () => {
    return (
        <div id='home'>
            <Carousel autoplay>
                <div>
                    <img src={Home1} alt='home1'/>
                </div>
                <div>
                    <img src={Home2} alt='home2'/>
                </div>
                <div>
                    <img src={Home3} alt='home3'/>
                </div>
            </Carousel>
            <div className='mt-100 mr-120 mb-66 ml-120'>
                <Row justify="space-between">
                    <Col span={12}>
                        <h3 className='font-size-40 font-bold-400 m-0'>Where Relaxation meets Rejuvenation!</h3>
                        <h4 className='font-size-60 font-bold-500 mt-40 font-gold font-family-petrona mb-20'>Ayur Sanjeevnam</h4>
                        <div className='width-470'>
                            <Divider className='bg-gold-100 height-4'/>
                        </div>
                        <p className='font-size-24 mt-38 font-bold-200 text-justify'>Welcome to Ayur Wellness & Spa, Bangalore’s leading network of Spa for Men! With over 15 years of unwavering commitment to wellness, and with 6 branches strategically located in the city, Ayur Wellness has become a sanctuary for those seeking refuge from the hustle and bustle of daily life. We offers a heaven of tranquillity where our guests can escape, unwind, and indulge in a range of luxurious treatments at an affordable price.</p>
                        <p className='font-size-28 font-bold-500 mt-40 mb-40'>Come, Take a break from your daily routines and visit us!</p>
                        <Row justify="space-between">
                            <Col span={12}>
                                <img src={Take_Break} alt='take brake'/>
                            </Col>
                            <Col span={10}>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <img src={Sanjeevanam} alt='sanjeevanam'/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;