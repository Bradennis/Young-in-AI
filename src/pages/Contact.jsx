import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-page'>
      <section className='contact-hero-bg'>
        <div className='contact-hero-content'>
          <h1 className='contact-title'>Contact Us</h1>
          <p className='contact-subtitle'>
            Young in AI is ready to provide the right solution according to your
            needs. Reach out for partnerships, program info, or support.
          </p>
        </div>
      </section>
      <div className='contact-card contact-card-split'>
        <div className='contact-info-block'>
          <h2>Get in touch</h2>
          <p className='contact-info-desc'>
            Reach out to Young in AI for partnerships, program information, or
            support. We're here to help you connect, collaborate, and grow.
          </p>
          <div className='contact-info-list'>
            <div className='contact-info-item'>
              <span className='contact-info-icon'>
                <FaMapMarkerAlt />
              </span>
              <div>
                <strong>Head Office</strong>
                <p
                  style={{
                    fontWeight: 500,
                    marginTop: "-4px",
                  }}
                >
                  University of Mines and Technology
                </p>
                <p style={{ fontSize: "0.9rem", marginTop: "-10px" }}>
                  School of Railway and Infrastructure Development
                </p>
                <p style={{ marginTop: "-10px", fontSize: "0.9rem" }}>
                  Essikado
                </p>
              </div>
            </div>
            <div className='contact-info-item'>
              <span className='contact-info-icon'>
                <FaEnvelope />
              </span>
              <div>
                <strong>Email Us</strong>
                <br />
                info@younginai.com
              </div>
            </div>
            <div className='contact-info-item'>
              <span className='contact-info-icon'>
                <FaPhoneAlt />
              </span>
              <div>
                <strong>Call Us</strong>
                <br />
                +233 55 123 4567
              </div>
            </div>
          </div>
          <div className='contact-social-list'>
            <a
              href='https://twitter.com/younginai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter />
            </a>
            <a
              href='https://linkedin.com/company/younginai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://facebook.com/younginai'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className='contact-form-block'>
          <h2>Send us a message</h2>
          <form className='contact-form'>
            <div className='form-row'>
              <input type='text' placeholder='Name' required />
              <input type='text' placeholder='Company' />
            </div>
            <div className='form-row'>
              <input type='text' placeholder='Phone' />
              <input type='email' placeholder='Email' required />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message' rows={4} required />
            <button type='submit' className='contact-btn'>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className='contact-map-section'>
        <iframe
          title='Young in AI Location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.073073857993!2d-1.7747!3d4.8992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSchool%20of%20Railway%20and%20Infrastructure%20Development%2C%20Essikado!5e0!3m2!1sen!2sgh!4v1660000000000!5m2!1sen!2sgh'
          width='100%'
          height='340'
          style={{ border: 0, borderRadius: "18px" }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
