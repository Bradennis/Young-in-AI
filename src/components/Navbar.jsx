import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import logoImg from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleAbout = () => setAboutOpen(!aboutOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <header>
      <nav className={`navbar-main ${scrolled ? "solid" : "transparent"}`}>
        <div className='logo'>
          <img src={logoImg} alt='Young in AI Logo' className='logo-img' />
        </div>

        {/* Hamburger */}
        <button className='menu-toggle' onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to='/' onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li
            className={`dropdown ${aboutOpen ? "active" : ""}`}
            onMouseEnter={() => window.innerWidth > 900 && setAboutOpen(true)}
            onMouseLeave={() => window.innerWidth > 900 && setAboutOpen(false)}
          >
            <button
              className='dropdown-toggle'
              onClick={() => (window.innerWidth <= 900 ? toggleAbout() : null)}
            >
              About{" "}
              {aboutOpen ? (
                <FaChevronUp className='chevron' />
              ) : (
                <FaChevronDown className='chevron' />
              )}
            </button>
            <ul className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
              <li className='dropdown-item'>
                <Link to='/about#who-we-are' onClick={() => setMenuOpen(false)}>
                  Who We Are
                </Link>
                <small>Learn more about our mission and identity</small>
              </li>
              <li className='dropdown-item'>
                <Link to='/about#what-we-do' onClick={() => setMenuOpen(false)}>
                  What We Do
                </Link>
                <small>Discover our initiatives and activities</small>
              </li>
              <li className='dropdown-item'>
                <Link
                  to='/about#meet-the-team'
                  onClick={() => setMenuOpen(false)}
                >
                  Meet the Team
                </Link>
                <small>Get to know the people driving our vision</small>
              </li>
              <li className='dropdown-item'>
                <Link
                  to='/about#our-history'
                  onClick={() => setMenuOpen(false)}
                >
                  Our History
                </Link>
                <small>Explore our journey through the years</small>
              </li>
            </ul>
          </li>

          <li>
            <Link to='/programs' onClick={() => setMenuOpen(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link to='/News & Events' onClick={() => setMenuOpen(false)}>
              News & Events
            </Link>
          </li>
          <li>
            <Link to='/resources' onClick={() => setMenuOpen(false)}>
              Resources
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Join */}
        <Link to='/programs' className='navbar-join-btn'>
          Join Now <FaArrowRight />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
