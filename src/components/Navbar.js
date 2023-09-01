import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "./imgs/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
// import { Link } from "react-router-dom";s
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  };

  const click=()=>{
    settoggle(false);
  }

  return (
    <div className="header">
      <nav className="navbar">
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}  >
          <img src={logo} alt="logo" />
          </Link>
        <div className="hamburger" onClick={handleToggle}>
          {toggle ? (
            <FaTimes
              size={30}
              style={{
                color: "#ffff",
              }}
            />
          ) : (
            <FaBars
              size={30}
              style={{
                color: "#ffff",
              }}
            />
          )}
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <Link onClick={click} to="hero" spy={true} smooth={true} offset={-100} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link
            onClick={click}
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link
            onClick={click}
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              testimonials
            </Link>
          </li>
          <li className="nav-items">
            <Link onClick={click} to="demo" spy={true} smooth={true} offset={-100} duration={500}>
              Demo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
