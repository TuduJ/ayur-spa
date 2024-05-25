import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Col, Row } from 'antd';
import YourPackage from "../image/YourPackage.png"
import YourPackageBackground from "../image/perfect_package_background.png"
import LineStar from "../image/Line Star.png"

const Membership = () => {
    return (
        <>
            <Header/>
            <div className='mt-100'>
                <div className='services-bg flex jc-center items-center '>
                    <p className='font-size-80 font-bold-500 font-white text-center font-family-petrona'>MEMBERSHIP PAGE</p>
                </div>
                <div className='pt-100 pl-117 pr-127 pb-82'>
                    <p className='font-gold font-size-60 font-bold-500 font-family-petrona'>MEMBERSHIP PAGE</p>
                    <p className='mt-34 font-size-34 font-bold-200 text-justify'>Ayur Wellness & Spa offers you a recurring subscription package, granting our members access to various spa amenities and services at discounted rates and with additional benefits. Here are some common features and benefits of Our package.</p>

                    <p className='mt-70 font-size-34 font-bold-200 text-justify'>1. <span className='font-bold-400'>Discounted Services:</span> Members will receive discounted rates on spa treatments and other services offered by Ayur wellness. These discounts can vary depending on the membership level and the specific services included.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>2. <span className='font-bold-400'>Exclusive Offers:</span> Spa members will have access to exclusive offers, promotions, or special events that are not available to non-members. These could include member-only spa parties, product discounts, or complimentary upgrades.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>3. <span className='font-bold-400'>Priority Booking:</span> Members will have priority access to booking appointments, allowing them to schedule treatments at their convenience and with greater flexibility. This can be particularly beneficial during peak times or for popular services.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>4. <span className='font-bold-400'>Complimentary Amenities:</span> Our memberships include complimentary access to amenities such as saunas, steam rooms, and fish spa. These additional perks enhance the overall spa experience and promote relaxation and well-being.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>5. <span className='font-bold-400'>Personalized Services:</span> Spa memberships will get personalized consultations or assessments with spa professionals to tailor treatments to individual needs and preferences. This ensures that members receive customized care and optimal results from their spa experience.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>6. <span className='font-bold-400'>Retail Discounts:</span> Members can avail discounts on retail products sold at the spa, including skincare products, essential oils, bath salts, and other wellness items. These discounts can make it more affordable to maintain a home spa regimen between visits.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>7. <span className='font-bold-400'>Flexible Payment Options:</span> We offer flexible payment options for memberships, allowing members to pay monthly, quarterly, or annually, depending on their preferences.</p>
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>8. <span className='font-bold-400'>Wellness Programs:</span> Our spa membership include access to wellness programs or workshops focused on nutrition, fitness, stress management, or holistic health practices. These programs complement spa treatments and support overall well-being.</p>
                    
                    <p className='mt-60 font-size-34 font-bold-200 text-justify'>Please contact our Centre to know more details and to avail the package.</p>
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
            <Footer/>
        </>
    );
};

export default Membership;