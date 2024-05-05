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

import ServicesImage from '../image/services_banner.png'


const Gallery = () => {
    return (
        <>
            <Header/>
            <div className='mt-100 '>
                <div className='relative'>
                    <img src={ServicesImage} alt='description banner' className='sanjeevanam-img'/>
                    <div className='services-bg flex jc-center items-center '>
                        <p className='font-size-80 font-bold-500 font-white text-center font-family-petrona'>GALLERY</p>
                    </div>
                </div>
                <div className='pt-95 pl-90 pr-90 pb-77'>
                    <Row gutter={8}>
                        <Col span={12}>
                            <img src={Gallery1} alt='footer banner'/>
                        </Col>
                        <Col span={12}>
                            <Row gutter={[16, 2]}>
                                <Col span={12}>
                                    <img src={Gallery2} alt='footer banner'/>
                                </Col>
                                <Col span={12}>
                                    <img src={Gallery3} alt='footer banner'/>
                                </Col>
                                <Col span={12}>
                                    <img src={Gallery4} alt='footer banner'/>
                                </Col>
                                <Col span={12}>
                                    <img src={Gallery5} alt='footer banner'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row gutter={8} className='mt-40'>
                        <Col span={12}>
                            <Row>
                                <Col span={16}>
                                    <img src={Gallery6} alt='footer banner'/>
                                    <img src={Gallery7} alt='footer banner' className='mt-15'/>
                                </Col>
                                <Col span={8}>
                                    <img src={Gallery8} alt='footer banner'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <img src={Gallery9} alt='footer banner'/>
                        </Col>
                    </Row>

                    <Row justify={"space-between"} className='mt-40'>
                        <Col span={8.5}>
                            <img src={Gallery10} alt='footer banner'/>
                        </Col>
                        <Col span={7.5}>
                            <img src={Gallery11} alt='footer banner'/>
                        </Col>
                        <Col span={8}>
                            <img src={Gallery12} alt='footer banner'/>
                        </Col>
                    </Row>

                    <Row justify={"space-between"} className='mt-40'>
                        <Col span={5.5}>
                            <img src={Gallery13} alt='footer banner'/>
                        </Col>
                        <Col span={7.5}>
                            <img src={Gallery14} alt='footer banner'/>
                        </Col>
                        <Col span={5.5}>
                            <img src={Gallery15} alt='footer banner'/>
                        </Col>
                        <Col span={5.5}>
                            <img src={Gallery16} alt='footer banner'/>
                        </Col>
                    </Row>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Gallery;