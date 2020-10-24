import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={require("../Images/logo.png")} alt="Zuper" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars fa-lg"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Clientes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Empresa"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Empresa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Sobre" className="nav-links" onClick={closeMobileMenu}>
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contato"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
