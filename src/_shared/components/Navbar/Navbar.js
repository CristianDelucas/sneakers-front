import React, { useState } from "react";

import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import Avatar from "../../../assets/images/image-avatar.png";
import IconCart from "../icons/IconCart";
import IconMenu from "../icons/IconMenu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleOnMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="g-header">
      <div className="g-header__nav">
        <IconMenu onClick={handleOnMenu} />
        <div
          className={
            visible ? `g-header__nav__menu active` : `g-header__nav__menu`
          }
        >
          <ul onClick={() => setVisible(!visible)}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <Logo />
      </div>
      <div className="g-header__avatar">
        <IconCart />
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
