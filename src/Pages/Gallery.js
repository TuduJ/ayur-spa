import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col, Row } from 'antd';
import Gallery1 from '../image/Gallery 1.png'
import Gallery2 from '../image/Gallery 2.png'
import Gallery3 from '../image/Gallery 3.png'
import Gallery4 from '../image/Gallery 4.png'
import Gallery5 from '../image/Gallery 5.png'
import Gallery6 from '../image/Gallery 6.png'
import Gallery7 from '../image/Gallery 7.png'
import Gallery8 from '../image/Gallery 8.png'
import Gallery9 from '../image/Gallery 9.png'
import Gallery10 from '../image/Gallery 10.png'
import Gallery11 from '../image/Gallery 11.png'
import Gallery12 from '../image/Gallery 12.png'
import Gallery13 from '../image/Gallery 13.png'
import Gallery14 from '../image/Gallery 14.png'
import Gallery15 from '../image/Gallery 15.png'
import Gallery16 from '../image/Gallery 16.png'


const Gallery = () => {
    return (
        <>
            <Header/>
            <div className='mt-100 sm-mt-80'>
                <div className='services-bg flex jc-center items-center '>
                    <p className='font-size-80 sm-font-size-30 font-bold-500 font-white text-center font-family-petrona'>GALLERY</p>
                </div>
                <div className='pt-95 pl-90 pr-90 pb-77 sm-p-40'>
                    <Row gutter={8}>
                        <Col lg={12} sm={24}>
                            <img src={Gallery1} alt='footer banner' className='sm-width-full'/>
                        </Col>
                        <Col lg={12} sm={24}>
                            <Row gutter={[16, 2]}>
                                <Col lg={12} sm={24}>
                                    <img src={Gallery2} alt='footer banner' className='sm-width-full'/>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <img src={Gallery3} alt='footer banner' className='sm-width-full'/>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <img src={Gallery4} alt='footer banner' className='sm-width-full'/>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <img src={Gallery5} alt='footer banner' className='sm-width-full'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row gutter={8} className='mt-40'>
                        <Col lg={12} sm={24}>
                            <Row>
                                <Col lg={16} sm={24}>
                                    <img src={Gallery6} alt='footer banner' className='sm-width-full'/>
                                    <img src={Gallery7} alt='footer banner' className='mt-15 sm-width-full'/>
                                </Col>
                                <Col lg={8} sm={24}>
                                    <img src={Gallery8} alt='footer banner' className='sm-width-full'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} sm={24}>
                            <img src={Gallery9} alt='footer banner' className='sm-width-full'/>
                        </Col>
                    </Row>

                    <Row gutter={8} justify={"space-between"} className='mt-40'>
                        <Col lg={8} sm={24}>
                            <img src={Gallery10} alt='footer banner' className='sm-width-full'/>
                        </Col>
                        <Col lg={8} sm={24}>
                            <img src={Gallery11} alt='footer banner' className='sm-width-full'/>
                        </Col>
                        <Col lg={8} sm={24}>
                            <img src={Gallery12} alt='footer banner' className='sm-width-full'/>
                        </Col>
                    </Row>

                    <Row gutter={8} justify={"space-between"} className='mt-40'>
                        <Col lg={6} sm={24}>
                            <img src={Gallery13} alt='footer banner' className='sm-width-full'/>
                        </Col>
                        <Col lg={7} sm={24}>
                            <img src={Gallery14} alt='footer banner' className='sm-width-full'/>
                        </Col>
                        <Col lg={6} sm={24}>
                            <img src={Gallery15} alt='footer banner' className='sm-width-full'/>
                        </Col>
                        <Col lg={5} sm={24}>
                            <img src={Gallery16} alt='footer banner' className='sm-width-full'/>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Gallery;