import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./styles/Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Neutrogena_logo.svg/1280px-Neutrogena_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="header__nav">
        <Link to="/checkout">
          <div className="header__optionBasket">
          {/* <i  class="fas fa-shopping-basket"></i> */}
          <FontAwesomeIcon icon="fas fa-shopping-basket" />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
        <Link to="/about">
          <div className="header__option">
            <div>About Us</div>
          </div>
        </Link>
        <Link to="/contactUs">
          <div className="header__option">
            <div>Contact Us</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
