import React from "react";
import BrandLogo from "../image/Logo.png"
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: <Link to="/" className="font-charcoal header-link">HOME</Link>,
    key: '0',
  },
  {
    label: <Link to="/" className="font-charcoal header-link">ABOUT</Link>,
    key: '1',
  },
  {
    label: <Link to="/services" className="font-charcoal header-link">SERVICES</Link>,
    key: '2',
  },
  {
    label: <Link to="/gallery" className="font-charcoal header-link">GALLERY</Link>,
    key: '3',
  },
  {
    label: <Link to="/find-a-spa" className="font-charcoal header-link">FIND A SPA</Link>,
    key: '4',
  },
  {
    label: <Link to="/membership" className="font-charcoal header-link">MEMBERSHIP</Link>,
    key: '5',
  },
  {
    label: <Link to="/contact" className="font-charcoal header-link">CONTACT</Link>,
    key: '6',
  },
  
];

const Header = () => {
  return (
    <div className="bg-baige-100 p-10 width-100-per fixed top-0 zIndex-1">
      <div className="pl-100 sm-pl-10 pr-140 sm-pr-20 flex fd-row items-center jc-space-between">
        <img src={BrandLogo} alt="Brand Logo" className="sm-width-50 "/>
        <div className="width-70-per font-bold-700 flex jc-space-between sm-hidden">
          <p className="font-charcoal header-link"><Link to="/" className="font-charcoal header-link">HOME</Link></p>
          <p className="font-charcoal header-link">ABOUT</p>
          <p className="font-charcoal header-link"><Link to="/services" className="font-charcoal header-link">SERVICES</Link></p>
          <p className="font-charcoal header-link"><Link to="/gallery" className="font-charcoal header-link">GALLERY</Link></p>
          <p className="font-charcoal header-link"><Link to="/find-a-spa" className="font-charcoal header-link">FIND A SPA</Link></p>
          <p className="font-charcoal header-link"><Link to="/membership" className="font-charcoal header-link">MEMBERSHIP</Link></p>
          <p className="font-charcoal header-link"><Link to="/contact" className="font-charcoal header-link">CONTACT</Link></p>
        </div>
        <div className="mobile-web-only">
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a onClick={(e) => e.preventDefault()} className="font-charcoal font-size-18">
              Menu <DownOutlined />
            </a>
          </Dropdown>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
