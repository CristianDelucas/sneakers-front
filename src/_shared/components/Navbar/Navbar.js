import React, { useEffect, useState } from "react";

import Avatar from "../../../assets/images/image-avatar.png";
import IconCart from "../icons/IconCart";
import IconMenu from "../icons/IconMenu";
import IconLogo from "../icons/IconLogo";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
  const [width, setWindowWidth] = useState(0);
  const sidebarActive = () => {
    if (!active) {
      setActive("active");
    } else {
      setActive("");
    }
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
    if (width > 768) {
      setVisible(false);
    }
  };

  return (
    <div className="g-header">
      <div className="g-header__nav">
        <ul className="g-header__nav--logo ui-list">
          <li className="icon-menu">
            <IconMenu onClick={() => setVisible(true)} />
          </li>
          <li className="icon-logo">
            <IconLogo />
          </li>
        </ul>

        <div
          className={
            visible ? `g-header__nav__menu active` : `g-header__nav__menu`
          }
        >
          <ul onClick={() => setVisible(false)}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="g-header__avatar">
        <IconCart />
        <img src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Navbar;
