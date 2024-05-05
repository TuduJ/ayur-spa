import React from 'react';
import YourPackage from "../image/YourPackage.png"
import YourPackageBackground from "../image/perfect_package_background.png"
import LineStar from "../image/Line Star.png"
import { Button, Col, Row } from 'antd';

const ServicePage = () => {
    return (
        <>
            <div id='services' className='mt-60 ml-40 mr-40 mb-80'>
                <h4 className='text-center font-size-60 font-family-petrona'>Our Services</h4>
                <p className='text-center mt-50 font-bold-200 font-size-24 ml-200 mr-200'>Rejuvenate your body and mind with our professional massage services. We offer a range of services to address various physical and mental aliments, providing relaxation, pain relief, and rejuvenation.</p>
                <div>

                </div>
            </div>
            <div className='bg-charcoal-5'>
                <img src={YourPackageBackground} alt='sanjeevanam' className='absolute right-0'/>
                <Row justify={'space-between'} className='pl-90 pt-110 pb-140'>
                    <Col span={10}>
                        <img src={YourPackage} alt='sanjeevanam' className='relative'/>
                    </Col>
                    <Col span={12} className='pr-120'>
                        <h3 className='font-size-60 font-family-petrona mt-20'>Your Perfect package</h3>
                        <div className='p-40 bg-white-100 zIndex-2'>
                            <h4 className='text-center font-size-40 font-family-petrona m-0'>Ayur Spa Membership</h4>
                            <div className='flex jc-center mt-24'>
                                <img src={LineStar} alt='Line start'/>
                            </div>
                            <p className='text-center font-size-18 font-bold-100 mt-20 mb-20'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className='flex jc-center'>
                                <div className='width-180 height-60 bottom-60 absolute border-1 border-gold-100'></div>
                                <button className='button'>
                                    Explore Benefits
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ServicePage;