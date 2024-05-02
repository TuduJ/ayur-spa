import React from "react";
import BrandLogo from "../image/Logo.png"
import { Col, Row } from "antd";

const Header = () => {
  return (
    <div className="bg-baige-100 p-10 width-100-per fixed top-0 zIndex-1">
      <div className="pl-100 pr-140 flex fd-row items-center jc-space-between">
        <img src={BrandLogo} alt="Brand Logo"/>
        {/* <Row justify="end" className="width-70-per font-bold-700 font-charcoal">
          <Col span={3}>HOME</Col>
          <Col span={3}>ABOUT</Col>
          <Col span={3}>SERVICES</Col>
          <Col span={3}>GALLARY</Col>
          <Col span={3}>FIND A SPA</Col>
          <Col span={4}>MEMBERSHIP</Col>
          <Col span={3}>CONTACT</Col>
        </Row> */}
        <div className="width-70-per font-bold-700 flex jc-space-between">
          <a className="font-charcoal" href="#home">HOME</a>
          <a className="font-charcoal" href="#about">ABOUT</a>
          <a className="font-charcoal" href="#services">SERVICES</a>
          <a className="font-charcoal" href="#gallery">GALLERY</a>
          <a className="font-charcoal" href="#findaspa">FIND A SPA</a>
          <a className="font-charcoal" href="#membership">MEMBERSHIP</a>
          <a className="font-charcoal" href="#contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
