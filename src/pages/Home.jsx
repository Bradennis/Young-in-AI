import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroFeatures from "./HeroFeatures";
import Footer from "../components/Footer";
import "./Home.css";
import "./AboutSection.css";
import "./WhatWeDo.css";
import logoImg from "../assets/data science.jpg";
import logo from "../assets/logo.png";
import reactImg from "../assets/Networking.jpg";
import roboticsImg from "../assets/robotics.jpg";
import aiImg from "../assets/mobileapps.jpg";
import heroBg from "../assets/code.jpg";
import {
  FaBrain,
  FaShieldAlt,
  FaLaptopCode,
  FaNetworkWired,
  FaRobot,
  FaChevronUp,
  FaChevronDown,
  FaLightbulb,
} from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import Testimonials from "./Testimonials";

const faqs = [
  {
    id: 1,
    question: "What is Young in AI all about?",
    answer:
      "Young in AI is a youth-driven initiative that inspires and empowers students and professionals to explore Artificial Intelligence, STEM, and technology. We offer training, mentorship, and solutions that help you build a future-ready skill set for the digital era.",
  },
  {
    id: 2,
    question: "Who can join Young in AI?",
    answer:
      "Our programs and initiatives are open to everyone — from high school students curious about technology to professionals seeking to upgrade their digital and AI skills. We believe learning should be inclusive, engaging, and impactful.",
  },
  {
    id: 3,
    question: "Do I need prior technical experience to participate?",
    answer:
      "Not at all! We provide beginner-friendly programs alongside advanced ones. Whether you’re new to AI or already experienced, you’ll find structured learning paths and mentorship that match your level and interests.",
  },
  {
    id: 4,
    question: "How can I become part of your programs and bootcamps?",
    answer:
      "You can easily register for upcoming training sessions, workshops, and bootcamps through our website. Keep an eye on our Events section or subscribe to get updates on new opportunities.",
  },
  {
    id: 5,
    question: "Does Young in AI collaborate with schools or organizations?",
    answer:
      "Yes! We partner with educational institutions, companies, and innovation hubs to co-create impactful projects and training programs that align with emerging technologies and community development.",
  },
];
const RSS_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://techcrunch.com/feed/";
const defaultNewsImg =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iframeUrl, setIframeUrl] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const openModal = () => setShowJoinModal(true);
  const closeModal = () => setShowJoinModal(false);

  const [showBookingModal, setShowBookingModal] = useState(false);
  const openBookingModal = () => setShowBookingModal(true);
  const closeBookingModal = () => setShowBookingModal(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(RSS_URL);
        const data = await res.json();
        setNews(data.items || []);
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const handleNewsClick = (url) => {
    setIframeUrl(url);
  };
  const handleCloseIframe = () => {
    setIframeUrl(null);
  };

  return (
    <div className='home-container'>
      <div className='hero' style={{ backgroundImage: `url(${heroBg})` }}>
        <div className='hero-content'>
          <h1>
            Be Young, <span style={{ color: "white" }}>Be Bold,</span> Be
            AI-Ready
          </h1>
          <p className='vision'>
            We inspire, empower and train the next generation with AI and STEM
            skills, while providing simple software and hardware solutions and
            consultancy services to industry professionals.
          </p>
          <button className='cta-btn' onClick={openModal}>
            Join Now
          </button>
        </div>
      </div>
      {/* JOIN NOW MODAL */}
      {showJoinModal && (
        <div className='join-modal-overlay' onClick={closeModal}>
          <div
            className='join-modal'
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button className='join-modal-close' onClick={closeModal}>
              ✕
            </button>

            <div className='join-modal-logo-div'>
              <img
                src={logo}
                alt='Young in AI Logo'
                className='join-modal-logo'
              />
            </div>
            <h2>Join the Young in AI Community</h2>
            <p>
              Fill out the form below to become part of our growing network of
              innovators and tech enthusiasts.
            </p>
            <form className='join-form'>
              <input type='text' placeholder='Full Name' required />
              <input type='email' placeholder='Email Address' required />
              <textarea
                placeholder='Tell us why you want to join (optional)'
                rows='3'
              ></textarea>
              <button type='submit' className='join-submit-btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <HeroFeatures />

      {/* About Us Section */}
      <section className='about-section'>
        <div className='about-container'>
          <div className='about-left'>
            <span className='about-label'>About Young in AI</span>
            <h1 className='about-title'>Welcome to Young in AI</h1>
            <p className='about-desc'>
              Young in AI helps students and professionals learn AI and STEM
              skills, and offers simple software and hardware solutions and
              consultancy for industry experts.
            </p>
            <p className='about-desc'>
              We make AI easy and accessible for everyone, supporting your
              growth and success in technology.
            </p>
            <button className='about-btn'>
              <Link
                to='/about'
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Explore More
              </Link>
            </button>
          </div>
          <div className='about-right'>
            <div className='events-card'>
              <h2 className='events-title'>Upcoming Events</h2>
              <div className='event-item'>
                <span className='event-name'>AI Bootcamp for Teens</span>
                <div className='event-details'>
                  <span className='event-time'>
                    🕒 Sept 21, 10:00 AM - 4:00 PM
                  </span>
                  <span className='event-location'>Innovation Hub</span>
                </div>
              </div>
              <div className='event-item'>
                <span className='event-name'>Women in STEM Panel</span>
                <div className='event-details'>
                  <span className='event-time'>
                    🕒 Oct 5, 2:00 PM - 5:00 PM
                  </span>
                  <span className='event-location'>Online</span>
                </div>
              </div>
              <div className='event-item'>
                <span className='event-name'>Young Innovators Hackathon</span>
                <div className='event-details'>
                  <span className='event-time'>
                    🕒 Nov 12, 9:00 AM - 8:00 PM
                  </span>
                  <span className='event-location'>Tech Center</span>
                </div>
              </div>
              <div className='event-item'>
                <span className='event-name'>AI Consultancy Services</span>
                <div className='event-details'>
                  <span className='event-time'>🕒 Ongoing</span>
                  <span className='event-location'>Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
      <section className='what-we-do-section'>
        <h2 className='services-title'>Our Services</h2>
        <div className='what-we-do-header'>
          <div className='what-we-do-title-wrap'>
            <h2 className='what-we-do-title'>
              We Believe We Will Be Successful If Our Clients Are Successful.
            </h2>
          </div>
          <div className='what-we-do-divider'></div>
          <div className='what-we-do-desc'>
            <p>
              We provide solutions, services, and training in these areas to
              help you succeed:
            </p>
          </div>
        </div>

        <div className='what-we-do-cards'>
          <div className='what-card'>
            <img src={logoImg} alt='Web & Mobile Apps' className='what-img' />
            <div className='what-label'>Data Science and ML</div>
          </div>
          <div className='what-card'>
            <img
              src={reactImg}
              alt='Networking & Cybersecurity'
              className='what-img'
            />
            <div className='what-label'>Networking & Cybersecurity</div>
          </div>
          <div className='what-card'>
            <img src={roboticsImg} alt='Robotics' className='what-img' />
            <div className='what-label'>Robotics</div>
          </div>
          <div className='what-card'>
            <img
              src={aiImg}
              alt='Web & Mobile Development'
              className='what-img'
            />
            <div className='what-label'>Web & Mobile Apps</div>
          </div>
        </div>
        <div className='more-services-btn-wrap'>
          <button className='book-services-btn' onClick={openBookingModal}>
            Book Our Services <span className='arrow'>&rarr;</span>
          </button>
        </div>

        {/* BOOK SERVICES MODAL */}
        {showBookingModal && (
          <div className='booking-modal-overlay' onClick={closeBookingModal}>
            <div className='booking-modal' onClick={(e) => e.stopPropagation()}>
              <button
                className='booking-modal-close'
                onClick={closeBookingModal}
              >
                ✕
              </button>
              <div
                className='join-modal-logo-div'
                style={{ marginBottom: "-30px" }}
              >
                <img
                  src={logo}
                  alt='Young in AI Logo'
                  className='join-modal-logo'
                />
              </div>
              <h2>Book Our Services</h2>
              <p>
                Fill in your details to request a consultation or service
                package from our team.
              </p>
              <form className='booking-form'>
                <input type='text' placeholder='Full Name' required />
                <input type='email' placeholder='Email Address' required />
                <select required>
                  <option value=''>Select Service</option>
                  <option>AI & Data Science</option>
                  <option>Networking & Cybersecurity</option>
                  <option>Robotics & Engineering</option>
                  <option>Web & Mobile Apps</option>
                </select>
                <textarea
                  rows='3'
                  placeholder='Briefly describe your project or need'
                ></textarea>
                <button type='submit' className='booking-submit-btn'>
                  Send Request
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Programs Section */}
      <section className='programs-section'>
        <h2 className='programs-title'>Our Programs</h2>
        <p className='programs-intro'>
          We deliver accessible training and opportunities across AI, STEM, and
          innovation fields. Each program pillar is designed to nurture
          knowledge, skills, and practical application.
        </p>

        <div className='programs-container'>
          {/* Left side: navigation */}

          <div className='programs-nav'>
            <ul>
              <li>
                <a href='#ai'>
                  <FaBrain className='program-icon' /> AI & Data Science
                </a>
              </li>
              <li>
                <a href='#robotics'>
                  <FaRobot className='program-icon' /> Robotics & Engineering
                </a>
              </li>
              <li>
                <a href='#cyber'>
                  <FaShieldAlt className='program-icon' />
                  Networking & Cybersecurity
                </a>
              </li>
              <li>
                <a href='#web'>
                  <FaLaptopCode className='program-icon' />
                  Web & Mobile Innovation
                </a>
              </li>
            </ul>
          </div>

          {/* Right side: scrollable content */}
          <div className='programs-content'>
            <div id='ai' className='pillar-block'>
              <h3>AI & Data Science</h3>
              <p>
                Building capacity in artificial intelligence and data-driven
                problem solving.
              </p>
              <ul>
                <li>Machine Learning & Deep Learning</li>
                <li>Data Analytics & Visualization</li>
                <li>AI for Social Good</li>
              </ul>
            </div>

            <div id='robotics' className='pillar-block'>
              <h3>Robotics & Engineering</h3>
              <p>
                Hands-on learning with robotics, electronics, and hardware
                prototyping.
              </p>
              <ul>
                <li>Robotics Bootcamps</li>
                <li>Hardware Design & IoT</li>
                <li>Engineering for Innovation</li>
              </ul>
            </div>

            <div id='cyber' className='pillar-block'>
              <h3>Networking & Cybersecurity</h3>
              <p>
                Equipping learners with secure networking and ethical hacking
                skills.
              </p>
              <ul>
                <li>Cybersecurity Awareness</li>
                <li>Networking Fundamentals</li>
                <li>Secure Systems Design</li>
              </ul>
            </div>

            <div id='web' className='pillar-block'>
              <h3>Web & Mobile Innovation</h3>
              <p>
                Designing modern web and mobile apps to solve real-world
                problems.
              </p>
              <ul>
                <li>Frontend & Backend Development</li>
                <li>Mobile App Design</li>
                <li>Entrepreneurship & Startups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Tech News & Events Section */}
      <section className='knust-news-section'>
        <h2 className='knust-news-title'>NEWS & EVENTS</h2>
        <div className='knust-news-bar'></div>
        {loading ? (
          <div>Loading news...</div>
        ) : error ? (
          <div>{error}</div>
        ) : news.length > 0 && news[0] ? (
          <div className='knust-news-main'>
            {/* Top Story (left) */}
            <div className='knust-news-top-story'>
              <div className='knust-news-top-label'>
                <span className='knust-news-top-icon'>📰</span>
                <span>TOP STORY</span>
              </div>
              <div
                className='knust-news-top-img-wrap'
                onClick={() => handleNewsClick(news[0]?.link)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    news[0]?.enclosure?.link &&
                    /\.(jpg|jpeg|png|gif|webp)$/i.test(news[0].enclosure.link)
                      ? news[0].enclosure.link
                      : defaultNewsImg
                  }
                  alt={news[0]?.title || "Top Story"}
                  className='knust-news-top-img'
                />
                <div className='knust-news-top-caption'>
                  {news[0]?.title || "No top story available"}
                </div>
              </div>
            </div>
            {/* News List (right) */}
            <div className='knust-news-list'>
              <div className='knust-news-tabs-wrap knust-news-list-tabs'>
                <div className='knust-news-tabs'>
                  <span className='knust-news-tab active'>News</span>
                  <span className='knust-news-tab'>All Events</span>
                </div>
                <button
                  className='knust-news-more-btn-top'
                  onClick={() => handleNewsClick("https://techcrunch.com/")}
                >
                  More news
                </button>
              </div>
              <div className='knust-news-list-items knust-news-list-scroll'>
                {news.slice(1, 3).map((item) => (
                  <div
                    className='knust-news-list-item'
                    key={item.link}
                    onClick={() => handleNewsClick(item.link)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={
                        item?.enclosure?.link &&
                        /\.(jpg|jpeg|png|gif|webp)$/i.test(item.enclosure.link)
                          ? item.enclosure.link
                          : defaultNewsImg
                      }
                      alt={item?.title || "News"}
                      className='knust-news-list-img'
                    />
                    <div className='knust-news-list-content'>
                      <div className='knust-news-list-title'>
                        {item?.title || "No title"}
                      </div>
                      <div className='knust-news-list-desc'>
                        {item?.description
                          ? item.description.replace(/<[^>]+>/g, "")
                          : "No description"}
                      </div>
                      <div className='knust-news-list-meta'>
                        <span className='knust-news-list-date'>
                          <span className='knust-news-list-date-icon'>📅</span>
                          {item?.pubDate
                            ? new Date(item.pubDate).toLocaleDateString()
                            : ""}
                        </span>
                        <span className='knust-news-list-cat'>
                          General News
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>No news found.</div>
        )}
      </section>
      {/* Iframe Modal Overlay */}
      {iframeUrl && (
        <div className='iframe-modal'>
          <button className='iframe-close-btn' onClick={handleCloseIframe}>
            Close
          </button>
          <iframe
            src={iframeUrl}
            title='TechCrunch News'
            className='iframe-content'
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
        </div>
      )}

      {/* ✅ FAQ SECTION (Homepage Focused) */}
      <section className='faq-section'>
        <div className='faq-header'>
          <h2>
            <FaLightbulb /> Frequently Asked Questions
          </h2>
          <p>
            Everything you need to know about our vision, mission, and
            opportunities.
          </p>
        </div>

        <div className='faq-container'>
          {faqs.map((faq) => (
            <div
              className={`faq-item ${openFAQ === faq.id ? "open" : ""}`}
              key={faq.id}
            >
              <div
                className='faq-question'
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
              >
                <h3>{faq.question}</h3>
                <span className='faq-icon'>
                  {openFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {openFAQ === faq.id && <p className='faq-answer'>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
