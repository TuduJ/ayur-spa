import React from 'react';
import YourPackage from "../image/YourPackage.png"
import YourPackageBackground from "../image/perfect_package_background.png"
import LineStar from "../image/Line Star.png"
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const ServicePage = () => {

    const navigate = useNavigate();

    const handlRouteMembership = () => {
        navigate('/membership');
    }

    return (
        <>
            <div id='services' className='mt-60 sm-mt-0 pl-40 pr-40 mb-80'>
                <h4 className='text-center font-size-60 font-family-petrona sm-mt-0 sm-mb-0'>Our Services</h4>
                <p className='text-center mt-50 font-bold-200 font-size-24 pl-200 pr-200 sm-p-0'>Rejuvenate your body and mind with our professional massage services. We offer a range of services to address various physical and mental aliments, providing relaxation, pain relief, and rejuvenation.</p>
            </div>
            <div className='bg-charcoal-5'>
                <img src={YourPackageBackground} alt='sanjeevanam' className='absolute right-0'/>
                <Row justify={'space-between'} align={"middle"} className='pl-90 pt-110 pb-140 sm-p-40'>
                    <Col lg={10} sm={24}>
                        <img src={YourPackage} alt='sanjeevanam' className='width-full height-auto'/>
                    </Col>
                    <Col lg={12} sm={24} className='pr-120 sm-p-40'>
                        <h3 className='font-size-50 sm-font-size-40 font-family-petrona mt-20 sm-mt-20 text-center'>Your Perfect package</h3>
                        <div className='p-40 sm-p-20 bg-white-100 zIndex-2'>
                            <h4 className='text-center font-size-40 sm-font-size-30 font-family-petrona m-0'>Ayur Spa Membership</h4>
                            <div className='flex jc-center mt-24'>
                                <img src={LineStar} alt='Line start'/>
                            </div>
                            <p className='text-center font-size-18 font-bold-100 mt-20 mb-20'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <div className='flex jc-center' onClick={handlRouteMembership}>
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