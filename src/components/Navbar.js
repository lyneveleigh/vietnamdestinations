import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      setClick(false)
    } else {
      setButton(true);
      setClick(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);


  return (
    <>
      <nav className="navbar">

        <div className="navbar_container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            VIV <i className="fab fa-pagelines"></i>
          </Link>

          {!button && !click && (window.innerWidth <= 960) && <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/beaches"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Beaches
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/mountaint"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Mountains
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/streetfood"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Street food
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle="btn--outline" link={"/sign-up"} >SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
