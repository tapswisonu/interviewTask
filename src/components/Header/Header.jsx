import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg header ">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">LoGo</Link>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutUs">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testimonials">Testimonials</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
