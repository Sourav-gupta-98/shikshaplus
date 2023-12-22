"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header id="master-head" className="navbar menu-absolute menu-center">
      <div className="container">
        <div id="main-logo" className="logo-container">
          <Link className="logo" href="/">
            <Image
              src={require("../../public/images/shikshapluslogo.png")}
              className="logo-dark"
              alt="shikshaplus"
              width={250}
              height={100}
            />
            <Image
              src={require("../../public/images/shikshapluslogo.png")}
              className="logo-light"
              alt="shikshaplus"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="menu-toggle-btn">
          <Link href={"/"} className="navbar-toggle">
            <div className="burger-lines"></div>
          </Link>
        </div>
        <div id="navigation" className="nav navbar-nav navbar-main">
          <ul id="main-menu" className="menu-primary">
            <li className="menu-item">
              <Link href="/">Home</Link>
            </li>

            <li className="menu-item">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="menu-item">
              <Link href="/">Book Demo</Link>
            </li>
            <li className="menu-item">
              <Link href="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="menu-button">
            <Link href="/signin">
              <div className="btn btn-primary">sign in / Register</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
