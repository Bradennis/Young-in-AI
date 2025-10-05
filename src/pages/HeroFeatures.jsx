import React from "react";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaUserTie,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";
import "./HeroFeatures.css";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Online Course",
    desc: "Learn at your own pace with expert-led modules.",
  },
  {
    icon: <FaVideo />,
    title: "Live Webinar",
    desc: "Join interactive sessions and ask questions live.",
  },
  {
    icon: <FaUserTie />,
    title: "Career Mentoring",
    desc: "Get guidance from industry professionals.",
  },
  {
    icon: <FaHandshake />,
    title: "Consultancy",
    desc: "Get expert software and hardware solutions for your business.",
  },
];

const HeroFeatures = () => (
  <div className='hero-features-wrapper'>
    <div className='hero-features'>
      {features.map((f, i) => (
        <div className='feature-card' key={i}>
          <div className='feature-icon'>{f.icon}</div>
          <div className='feature-info'>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HeroFeatures;
