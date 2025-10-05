import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logoImg from "../assets/logo.png";
import "../styles/Footer.css";

const Footer = () => (
  <footer
    className='footer'
    style={{
      background: "linear-gradient(90deg, #222 0%, #16e0bd 60%, #12897a 100%)",
      color: "#fff",
      boxShadow: "0 2px 16px rgba(22,224,189,0.08)",
    }}
  >
    <div className='footer-main'>
      <div className='footer-section about'>
        <h3 style={{ color: "#16e0bd" }}>About Us</h3>
        <p style={{ color: "#eafaf7" }}>
          Young in AI provides software, hardware, and AI solutions for
          professionals and students.
        </p>
        <span
          className='footer-logo'
          style={{
            display: "block",
            textAlign: "center",
            position: "relative",
            padding: "8px",
            background: "transparent",
          }}
        >
          <img
            src={logoImg}
            alt='Young in AI Logo'
            style={{
              width: 80,
              height: 80,
              margin: "0 auto",
              display: "block",
            }}
          />
        </span>
      </div>
      <div className='footer-section contact'>
        <h3 style={{ color: "#16e0bd" }}>Contact</h3>
        <p
          style={{
            color: "#fff",
            textShadow: "0 2px 8px rgba(22,224,189,0.18)",
            fontWeight: 500,
          }}
        >
          Takoradi, Ghana
        </p>
        <p
          style={{
            color: "#fff",
            textShadow: "0 2px 8px rgba(22,224,189,0.18)",
            fontWeight: 500,
          }}
        >
          Phone: +233 24-965-3242
        </p>
        <p
          style={{
            color: "#fff",
            textShadow: "0 2px 8px rgba(22,224,189,0.18)",
            fontWeight: 500,
          }}
        >
          Email: info@younginai.com
        </p>
        <div
          className='footer-socials'
          style={{ display: "flex", justifyContent: "center", gap: "18px" }}
        >
          <a href='#' style={{ color: "#16e0bd", fontSize: "1.5rem" }}>
            <FaFacebookF />
          </a>
          <a href='#' style={{ color: "#16e0bd", fontSize: "1.5rem" }}>
            <FaTwitter />
          </a>
          <a href='#' style={{ color: "#16e0bd", fontSize: "1.5rem" }}>
            <FaLinkedinIn />
          </a>
          <a href='#' style={{ color: "#16e0bd", fontSize: "1.5rem" }}>
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='footer-section newsletter'>
        <div>
          <h3 style={{ color: "#16e0bd" }}>Subscribe Newsletter</h3>
          <form className='footer-newsletter'>
            <input
              type='email'
              placeholder='Email Address'
              style={{
                background: "#222",
                color: "#eafaf7",
                border: "1px solid #16e0bd",
              }}
            />
            <button
              type='submit'
              style={{ background: "#16e0bd", color: "#fff" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className='footer-bottom'>
      <span
        style={{
          color: "#fff",
          fontWeight: "bold",
          textShadow: "0 2px 8px rgba(22,224,189,0.18)",
        }}
      >
        Copyright © 2025 Young in AI. All Rights Reserved.
      </span>
      <div className='footer-links'>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <a
            href='#'
            style={{
              color: "#fff",
              textDecoration: "underline",
              marginRight: "16px",
            }}
          >
            Terms & Conditions
          </a>
          <a href='#' style={{ color: "#fff", textDecoration: "underline" }}>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
