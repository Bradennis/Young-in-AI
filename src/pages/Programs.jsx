import React from "react";
import {
  FaLaptopCode,
  FaUsers,
  FaChalkboardTeacher,
  FaGlobe,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import programHero from "../assets/code.jpg";
import trainingImg from "../assets/dScience.jpg";
import mentorshipImg from "../assets/WhatsApp Image 2025-09-05 at 16.17.47_43df8204.jpg";
import outreachImg from "../assets/robotics.jpg";
import researchImg from "../assets/abstract.jpg";
import "./Programs.css";

const Programs = () => {
  const programs = [
    {
      id: "training",
      title: "Training & Workshops",
      icon: <FaLaptopCode />,
      img: trainingImg,
      desc: "Hands-on training in AI, Data Science, and emerging technologies with a strong focus on practical, real-world applications.",
      features: [
        {
          icon: <FaCheckCircle />,
          title: "Expert Instructors",
          desc: "Experienced professionals and academics who bring years of industry and research expertise.",
        },
        {
          icon: <FaCheckCircle />,
          title: "Practical Sessions",
          desc: "Interactive workshops that allow learners to gain hands-on skills and confidence.",
        },
      ],
    },
    {
      id: "mentorship",
      title: "Mentorship & Guidance",
      icon: <FaUsers />,
      img: mentorshipImg,
      desc: "Personalized mentorship to unlock learners’ potential and support career development.",
      features: [
        {
          icon: <FaCheckCircle />,
          title: "One-on-One Guidance",
          desc: "Mentors provide individualized support, helping learners set goals and navigate their journey.",
        },
        {
          icon: <FaCheckCircle />,
          title: "Career Support",
          desc: "Assistance with career planning, resume reviews, and interview preparation for smooth transitions.",
        },
      ],
    },
    {
      id: "research",
      title: "Research & Innovation",
      icon: <FaGlobe />,
      img: researchImg,
      desc: "Driving impactful research and promoting innovation that addresses real-world challenges.",
      features: [
        {
          icon: <FaCheckCircle />,
          title: "Innovative Solutions",
          desc: "Encouraging creativity and experimentation to solve pressing social and technical problems.",
        },
        {
          icon: <FaCheckCircle />,
          title: "Collaborative Projects",
          desc: "Partnering with institutions, industries, and communities for joint research initiatives.",
        },
      ],
    },
    {
      id: "outreach",
      title: "Outreach & Community",
      icon: <FaChalkboardTeacher />,
      img: outreachImg,
      desc: "Engaging the wider community with tech education and empowerment initiatives.",
      features: [
        {
          icon: <FaCheckCircle />,
          title: "Tech Campaigns",
          desc: "Organizing campaigns that raise awareness and spark interest in technology.",
        },
        {
          icon: <FaCheckCircle />,
          title: "Workshops in Schools",
          desc: "Providing training to students in schools to inspire the next generation of innovators.",
        },
      ],
    },
  ];

  return (
    <div className='programs-page'>
      {/* Hero Section */}
      <section className='programs-hero'>
        <div className='overlay'></div>
        <div className='programs-hero-content'>
          <h1>Our Programs</h1>
          <p>
            Empowering the next generation with skills, mentorship, and
            opportunities to thrive in technology, research, and innovation.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className='programs-grid'>
        <h2 className='section-title'>Explore Our Programs</h2>
        <div className='grid'>
          {programs.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className='program-card'
            >
              <div className='icon-circle'>{program.icon}</div>
              <h3>{program.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Expanded Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`programs-section split ${
            index % 2 === 1 ? "reverse" : ""
          }`}
        >
          <div className='about-image'>
            <img src={program.img} alt={program.title} />
          </div>
          <div className='about-text'>
            <span className='tagline'>
              {program.icon}
              {program.title}
            </span>
            <h2>{program.title}</h2>
            <p className='program-desc'>{program.desc}</p>
            <div className='features-list'>
              {program.features.map((feat, i) => (
                <div className='feature-item' key={i}>
                  <div className='feature-header'>
                    <span className='icon-circle small'>{feat.icon}</span>
                    <h4>{feat.title}</h4>
                  </div>
                  <p className='feature-desc'>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className='programs-cta'>
        <h2>
          <FaRocket className='icon' /> Ready to Start Your Journey?
        </h2>
        <p>
          Join our programs today and be part of a global community shaping the
          future with innovation, technology, and impact.
        </p>
        <button className='programs-btn'>Explore Programs</button>
      </section>
    </div>
  );
};

export default Programs;
