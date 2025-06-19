import React, { useState } from "react";
import "./Header.css";  

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky-top bg-white shadow-sm">
      <nav className="navbar navbar-expand-md navbar-light bg-white container">
        <a
          className="navbar-brand fw-bold d-flex align-items-center p-0"
          href="#hero"
        >
          <div
            className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center me-2"
            style={{ width: "40px", height: "40px" }}
          >
            LG
          </div>
          LoGo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarScroll"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`p-0 m-3 nav-link custom-nav-link text-capitalize ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  href={`#${item.id}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
