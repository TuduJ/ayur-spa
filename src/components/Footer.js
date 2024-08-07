import React from 'react';
import { Col, Divider, Row } from 'antd';
import BrandLogo from "../image/Logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='relative footer-bg-img flex jc-center items-center'>
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
            <div className='pt-100 pl-120 pr-120 pb-100 sm-p-40'>
                <Row gutter={50}>
                    <Col lg={8} sm={24}>
                        <img src={BrandLogo} alt="Brand Logo"/>
                        <p className='mt-20 font-size-18 font-gold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </Col>
                    <Col lg={6} sm={24}>
                        <div className='width-80'>
                            <Divider className='bg-gold-100 height-4'/>
                        </div>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Fish Spa</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Healthcare</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>Kerala Special Therapies</p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'>beauty Treatments</p>
                    </Col>
                    <Col lg={4} sm={24}>
                        <div className='width-80'>
                            <Divider className='bg-white-100 height-4'/>
                        </div>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'><Link to="/" className="font-charcoal footer-link">About</Link></p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'><Link to="/services" className="font-charcoal footer-link">Services</Link></p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'><Link to="/membership" className="font-charcoal footer-link">Membership</Link></p>
                        <p className='mt-10 font-size-24 font-bold-200 font-gold'><Link to="/contact" className="font-charcoal footer-link">Contact</Link></p>
                    </Col>
                    <Col lg={6} sm={24}>
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

