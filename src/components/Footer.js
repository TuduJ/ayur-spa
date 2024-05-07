import React from 'react';
import FooterImage from '../image/footer_image.png'
import { Col, Divider, Row } from 'antd';
import BrandLogo from "../image/Logo.png"

const Footer = () => {
    return (
        <>
            <div className='relative'>
                <img src={FooterImage} alt='footer banner' className='sanjeevanam-img'/>
                <div className='footer-bg flex jc-center items-center '>
                    <div>
                        <h1 className='font-size-40 font-bold-700 font-white text-center font-family-petrona border-bottom-4 border-gold-100 pb-10'>Book Services Now</h1>
                        <div className='flex jc-space-between items-center'>
                            <button className='button mr-10'>
                                Appointment
                            </button>
                            <button className='button-inv'>
                                <a href="tel:+919845703356">Make a Call</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-100 pl-120 pr-120 pb-100'>
                <Row gutter={50}>
                    <Col span={8}>
                        <img src={BrandLogo} alt="Brand Logo"/>
                        <p className='mt-20 font-size-18 font-gold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </Col>
                    <Col span={6}>
                        <div className='width-80'>
                            <Divider className='bg-gold-100 height-4'/>
                        </div>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Fish Spa</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Healthcare</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Kerala Special Therapies</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>beauty Treatments</p>
                    </Col>
                    <Col span={4}>
                        <div className='width-80'>
                            <Divider className='bg-white-100 height-4'/>
                        </div>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>About</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Services</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Membership</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Contact</p>
                    </Col>
                    <Col span={6}>
                        <div className='width-80'>
                            <Divider className='bg-gold-100 height-4'/>
                        </div>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>@+91 98457 03356</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>ayurspa@gmail.com</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Privacy Policy</p>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Footer;

