import React from 'react';
import Sanjeevanam from "../image/ayur_sanjeevanam.png"
import Take_Break from "../image/take_break.png"
import { Carousel, Col, Row } from 'antd';

const Home = () => {
    return (
        <>
            <Carousel autoplay>
                <div className='home-carousel-1'>
                    <div className='height-full flex items-center jc-flex-start pl-90 sm-p-40 width-550 sm-width-auto'>
                        <div>
                            <p className='font-size-75 sm-font-size-30 font-white mb-40 sm-mb-20 font-family-baloo'>
                                Where you feel unique and special
                            </p>
                            <button className='button mr-10 pointer'>
                                Make Appointment
                            </button>
                        </div>
                    </div>
                </div>
                <div className='home-carousel-2'>
                    <div className='height-full flex items-center jc-flex-start pl-90 sm-p-40 width-1080 sm-width-auto'>
                        <div>
                            <p className='font-size-75 sm-font-size-30 font-white mb-40 sm-mb-20 font-family-baloo'>
                                Where you feel unique and special
                            </p>
                            <button className='button mr-10 pointer'>
                                Make Appointment
                            </button>
                        </div>
                    </div>
                </div>
                <div className='home-carousel-3'>
                    <div className='height-full flex items-center jc-flex-start pl-90 sm-p-40 width-550 sm-width-auto'>
                        <div>
                            <p className='font-size-75 sm-font-size-30 font-white mb-40 sm-mb-20 font-family-baloo'>
                                Where you feel unique and special
                            </p>
                            <button className='button mr-10 pointer'>
                                Make Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>
            <div className='pt-100 pr-120 pb-66 pl-120 sm-pt-36 sm-pl-40 sm-pr-40 sm-pb-36'>
                <Row justify="space-between">
                    <Col lg={13} sm={24}>
                        <h3 className='font-size-40 sm-font-size-32 font-bold-400 m-0'>Where Relaxation meets Rejuvenation!</h3>
                        <h4 className='font-size-60 sm-font-size-30 font-bold-500 mt-40 font-gold font-family-petrona mb-20 pb-10 border-bottom-4'>Ayur Sanjeevnam</h4>
                        <p className='font-size-24 sm-font-size-20 mt-38 font-bold-200 text-justify'>Welcome to Ayur Wellness & Spa, Bangalore’s leading network of Spa for Men! With over 15 years of unwavering commitment to wellness, and with 6 branches strategically located in the city, Ayur Wellness has become a sanctuary for those seeking refuge from the hustle and bustle of daily life. We offers a heaven of tranquillity where our guests can escape, unwind, and indulge in a range of luxurious treatments at an affordable price.</p>
                        <p className='font-size-28 sm-font-size-20 font-bold-500 mt-40 sm-mt-20 mb-40 sm-mb-20'>Come, Take a break from your daily routines and visit us!</p>
                        <img className='hidden sm-block width-full' src={Take_Break} alt="break img"/>
                        <Row justify="space-between" className='sm-hidden'>
                            <Col lg={16} sm={24} >
                                <img src={Take_Break} alt='take brake'/>
                            </Col>
                            <Col lg={8} sm={24}>
                                <div className='width-full height-full bg-turqoise-100 flex items-center jc-center'>
                                    <div>
                                        <p className='font-size-90 font-white font-bold-500 m-0 font-family-petrona text-center'>1M+</p>
                                        <p className='font-size-30 font-white font-bold-500 m-0 font-family-petrona text-center'>Happy Customer</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={10} sm={24} className='sm-hidden'>
                        <img src={Sanjeevanam} alt='sanjeevanam'/>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Home;