import React from "react";
import "./navbar.css";
import NavbarActive from "./hooks/navbarActive";
import MobileInput from "./hooks/mobileInput";
import inputPC from "./hooks/inputPC";
import { FaSearch, FaShoppingCart, FaStoreAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <h1 className="logo">
            AUS <FaStoreAlt />
          </h1>
          <div className="menu">
            <input
              type="text"
              placeholder=" Search Products..."
              className="inputSearch"
            ></input>
            <button className="searchButton">
              <FaSearch />
            </button>
            <a href="/login">Login</a>
            <a href="">Register</a>
            <a href="">
              <FaShoppingCart />
              Cart
            </a>
          </div>
          <button className="hamburger is-active">
            <div className="bar"></div>
          </button>
        </div>
      </nav>
      <nav>
        <div className="container">
          <h1 className="logo">
            AUS <FaStoreAlt />
          </h1>
          <div className="menu">
            <input
              type="text"
              placeholder=" Search Products..."
              className="inputSearch11"
            ></input>

            <a className="searchButton" onClick={inputPC}>
              <FaSearch />
            </a>
            <a href="/login">Login</a>
            <a href="">Register</a>
            <a href="" className="cart">
              <FaShoppingCart />
            </a>
          </div>
          <button className="hamburger1" onClick={NavbarActive}>
            <div className="bar"></div>
          </button>
        </div>
      </nav>

      <div className="mobile-nav">
        <button className="mobile" onClick={MobileInput}>
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder=" Search Products ... "
          className="mobileInput"
        ></input>
        <a href="/login" className="mobile">
          Login
        </a>
        <a href="" className="mobile">
          register
        </a>
        <a href="" className="mobile cart">
          <FaShoppingCart />
        </a>
      </div>
      <div className="test">
        <ul className="nave">
          <div className="test1">
            <li>GRAPHIC</li>
            <li>TV'S</li>
            <li>SMARTPHONES</li>
            <li>CARDs</li>
            <li>144HZ</li>
            <li>LED</li>
            <li>RGB</li>
            <li>PIX</li>
            <li>CARD</li>
            <li>MOTHERBOARD</li>
            <li>PROCESSOR</li>
            <li>COOLER</li>
            <li>MARKET</li>
            <li>CONTACT</li>
            <li>SELL</li>
            <li>FREE</li>
            <li>BTC</li>
            <li>MOUSE</li>
            <li>TABLE</li>
            <li>KEYBOARD</li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
