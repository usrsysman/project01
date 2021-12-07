import React from "react";
import h from "./Header.module.css";

const Header = () => {
    return (
      <header className={h.header}>
        <img src="https://images.genial.ly/5e7f2f7ba2d3eb0fbde386e0/55ae74cf-645a-40ee-9985-c7e436903c45.png" />
        {/* <img src="https://www.pngitem.com/pimgs/m/560-5603874_product-image-logo-avatar-minimalist-flat-line-hd.png" /> */}
      </header>
    );
}

export default Header;