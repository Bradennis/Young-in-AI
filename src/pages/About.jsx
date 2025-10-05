import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaHistory,
  FaHandshake,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import teamImg from "../assets/ds1.jpg";
import missionImg from "../assets/code.jpg";
import historyImg from "../assets/news-banner.png";
import easy from "../assets/easy.jpg";
import asante from "../assets/asante.jpg";
import Dennis from "../assets/suit.jpg";
import "./About.css";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className='about-page'>
      {/* Hero */}
      <div className='about-hero'>
        <h1>About Us</h1>
        <p>
          Driving innovation, collaboration, and impact to build a better
          future.
        </p>
      </div>

      {/* Who We Are */}
      <section id='who-we-are' className='about-section split'>
        <div className='about-image'>
          <img src={teamImg} alt='Our Team' />
        </div>
        <div className='about-text'>
          <h2>
            <FaUsers className='icon' /> Who We Are
          </h2>
          <p>
            We are a vibrant community of innovators, researchers, and change
            makers united by a common purpose: to harness the power of knowledge
            and technology for global impact. Our network spans students,
            professionals, and organizations dedicated to driving growth and
            positive change.
          </p>
          <ul>
            <li>✔ Diverse community of experts and learners</li>
            <li>✔ Strong commitment to innovation and inclusion</li>
            <li>✔ Passionate about shaping tomorrow’s leaders</li>
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section id='what-we-do' className='about-section split reverse'>
        <div className='about-image'>
          <img src={missionImg} alt='Our Mission' />
        </div>
        <div className='about-text'>
          <h2>
            <FaLightbulb className='icon' /> What We Do
          </h2>
          <p>
            Through training programs, cutting-edge research, and impactful
            projects, we empower individuals and organizations to excel. Our
            initiatives are designed to bridge gaps, foster collaboration, and
            create opportunities for meaningful transformation.
          </p>
          <ul>
            <li>✔ Leadership & skills development programs</li>
            <li>✔ Research-driven solutions to real challenges</li>
            <li>✔ Community-based projects and outreach</li>
          </ul>
        </div>
      </section>

      {/* Meet the Team */}
      <section id='meet-the-team' className='about-section team-section'>
        <h2 className='team-title'>
          <FaHandshake className='icon' /> Meet the Team
        </h2>
        <p className='team-intro'>
          Our team is a blend of dreamers, strategists, and builders. Each
          member brings unique expertise and creativity, making us stronger as a
          whole.
        </p>
        <div className='team-grid'>
          {/* Member 1 */}
          <div className='team-card'>
            <img src={easy} alt='Martey' />
            <div className='team-info'>
              <h3>Ezekiel Mensah Martey (PhD)</h3>
              <p>Founder & CEO</p>
              <p className='team-bio'>
                Visionary leader driving innovation and growth for our
                community.
              </p>
              <div className='team-socials'>
                <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <FaTwitter />
                </a>
                <a href='https://github.com' target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div className='team-card'>
            <img src={asante} alt='Emmanuel Asante' />
            <div className='team-info'>
              <h3>Emmanuel Asante</h3>
              <p>Lead Researcher</p>
              <p className='team-bio'>
                Passionate about research and creating impactful solutions for
                all.
              </p>
              <div className='team-socials'>
                <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <FaTwitter />
                </a>
                <a href='https://github.com' target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div className='team-card'>
            <img src={Dennis} alt='Dennis Akplehey Agyemang' />
            <div className='team-info'>
              <h3>Dennis Akplehey Agyemang</h3>
              <p>Head of Programs</p>
              <p className='team-bio'>
                Expert in program management, training, and strategic
                development.
              </p>
              <div className='team-socials'>
                <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                  <FaLinkedin />
                </a>
                <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <FaTwitter />
                </a>
                <a href='https://github.com' target='_blank' rel='noreferrer'>
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section id='our-history' className='about-section split'>
        <div className='about-text'>
          <h2>
            <FaHistory className='icon' /> Our History
          </h2>
          <p>
            Since our inception, we’ve grown from a small initiative into a
            global movement. Our journey reflects resilience, innovation, and an
            unwavering belief in the power of collaboration.
          </p>
          <div className='timeline'>
            <div className='timeline-item'>
              <span>2015</span> Founded with a vision for impact
            </div>
            <div className='timeline-item'>
              <span>2018</span> Expanded programs internationally
            </div>
            <div className='timeline-item'>
              <span>2022</span> Reached 10,000+ participants globally
            </div>
          </div>
        </div>
        <div className='about-image'>
          <img src={historyImg} alt='Our Journey' />
        </div>
      </section>
    </div>
  );
};

export default About;
