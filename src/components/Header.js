import React from "react";
import BrandLogo from "../image/Logo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-baige-100 p-10 width-100-per fixed top-0 zIndex-1">
      <div className="pl-100 pr-140 flex fd-row items-center jc-space-between">
        <img src={BrandLogo} alt="Brand Logo"/>
        <div className="width-70-per font-bold-700 flex jc-space-between">
          <p className="font-charcoal header-link"><Link to="/" className="font-charcoal header-link">HOME</Link></p>
          <p className="font-charcoal header-link">ABOUT</p>
          <p className="font-charcoal header-link"><Link to="/services" className="font-charcoal header-link">SERVICES</Link></p>
          <p className="font-charcoal header-link"><Link to="/gallery" className="font-charcoal header-link">GALLERY</Link></p>
          <p className="font-charcoal header-link"><Link to="/find-a-spa" className="font-charcoal header-link">FIND A SPA</Link></p>
          <p className="font-charcoal header-link"><Link to="/membership" className="font-charcoal header-link">MEMBERSHIP</Link></p>
          <p className="font-charcoal header-link"><Link to="/contact" className="font-charcoal header-link">CONTACT</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
