import React from "react";
import {
  Link,
} from "react-router-dom";
import logo from '../images/ggglogo.png';

const Nav = () => {
  return (
    <nav>
      <div className="nav-child">
        <Link to="/"><img src={logo} alt="logo-img" /></Link>
      </div>
      <ul className="nav-child">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;