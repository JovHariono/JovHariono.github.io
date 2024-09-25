"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import { bubble as Menu } from "react-burger-menu";

import logoBlack from "../../public/logos/logo.png";
import logowhite from "../../public/logos/logoWhite.png";

const Header: React.FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(logowhite);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuStateChange = (state: any) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
        setLogo(logoBlack);
      } else {
        setIsScrolled(false);
        setLogo(logowhite);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`containerNavMobile ${isScrolled ? "scrolled" : ""}`}>
        <Menu isOpen={isOpen} onStateChange={handleMenuStateChange}>
          <Link className="menu-item" href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="menu-item" href="/#about-us" onClick={closeMenu}>
            About Us
          </Link>
          <Link className="menu-item" href="/#our-project" onClick={closeMenu}>
            Our Projects
          </Link>
          <Link className="menu-item" href="/#contact" onClick={closeMenu}>
            Contacts
          </Link>
        </Menu>
      </div>

      <div className={`containerNav ${isScrolled ? "scrolled" : ""}`}>
        <Link className="navLogo" href="/">
          <Image className="logo" alt="Acierto's Asset" src={logo}></Image>
        </Link>

        <div className="containerNavHref">
          <Link href="/#about-us" className="navHref">
            About Us
          </Link>
          <Link href="/#our-project" className="navHref">
            Our Project
          </Link>
          <Link href="/#contact" className="navHref">
            Contacts
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
