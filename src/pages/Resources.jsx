import React, { useState } from "react";
import {
  FaBook,
  FaFileAlt,
  FaLightbulb,
  FaPenFancy,
  FaSearch,
  FaArrowRight,
  FaDownload,
  FaGlobe,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Resources.css";
import resourceHero from "../assets/code.jpg";
import articleImg from "../assets/datascience1.jpg";
import ebookImg from "../assets/abstract.jpg";
import faqImg from "../assets/AI image.jpg";

const Resources = () => {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);

  const insights = [
    {
      id: 1,
      title: "Embracing Growth Through Consistency",
      date: "October 4, 2025",
      desc: "Success doesn’t come from big leaps, but from consistent small steps. Every day is an opportunity to do a little better — to learn, reflect, and improve.",
    },
    {
      id: 2,
      title: "The Power of Learning by Doing",
      date: "October 2, 2025",
      desc: "Reading builds understanding, but doing builds mastery. Get your hands dirty, try things out, fail fast, and iterate your way to excellence.",
    },
  ];

  const resources = {
    articles: [
      {
        id: 1,
        title: "AI in Education: Shaping Future Learning",
        img: articleImg,
        desc: "A deep dive into how Artificial Intelligence is transforming classrooms and student engagement.",
        link: "/article/ai-education",
      },
      {
        id: 2,
        title: "Mental Health & Technology",
        img: articleImg,
        desc: "Exploring the intersection between mental well-being and digital innovation.",
        link: "/article/mental-health-tech",
      },
    ],
    ebooks: [
      {
        id: 1,
        title: "Data Science Foundations",
        img: ebookImg,
        desc: "An introductory e-book on core data science principles for beginners.",
        link: "https://www.analyticsvidhya.com/blog/2021/06/free-data-science-books/",
      },
      {
        id: 2,
        title: "Digital Wellness Strategies",
        img: ebookImg,
        desc: "Learn how to use technology to improve, not harm, your mental health.",
        link: "https://towardsdatascience.com/",
      },
    ],
  };

  const faqs = [
    {
      id: 1,
      question: "How can I access downloadable resources?",
      answer:
        "All downloadable materials, such as e-books and documents, are available in the 'E-books & Documents' section. Each file has a dedicated download button — simply click to save a copy. All files are provided in PDF format for easy offline reading and are optimized for both mobile and desktop access.",
    },
    {
      id: 2,
      question: "Are new resources added regularly?",
      answer:
        "Absolutely. Our resource center is continuously evolving. New materials — including research articles, reflective essays, and skill guides — are uploaded weekly. You can also subscribe below to get notified whenever fresh learning materials or admin insights are published.",
    },
    {
      id: 3,
      question: "Can I contribute my own articles or insights?",
      answer:
        "Yes! We welcome thought-provoking contributions from students, professionals, and researchers. If you’d like to contribute, simply reach out via email or our upcoming submission form. Once reviewed, your work could be featured to inspire and educate others across the UniCare community.",
    },
    {
      id: 4,
      question: "Do I need an account to access materials?",
      answer:
        "Currently, all content is publicly available without any login requirements. However, an optional account feature will be introduced soon, allowing users to bookmark, comment on, and recommend their favorite materials for easier access.",
    },
    {
      id: 5,
      question: "What types of topics are covered in the resources?",
      answer:
        "We cover a wide range of interdisciplinary themes including Artificial Intelligence, Data Science, Digital Wellbeing, Mental Health Awareness, Academic Growth, Leadership Development, and Personal Productivity — all curated to empower both mind and skill.",
    },
  ];

  const allResources = [...resources.articles, ...resources.ebooks];
  const getDisplayedResources = () =>
    activeSection === "all" ? allResources : resources[activeSection];
  const filteredInsights = insights.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='resources-page'>
      {/* HERO SECTION */}
      <section
        className='resources-hero'
        style={{ backgroundImage: `url(${resourceHero})` }}
      >
        <div className='overlay'>
          <h1>Resources & Insights</h1>
          <p>
            Explore articles, guides, and daily reflections designed to inspire
            learning, growth, and innovation.
          </p>
        </div>
      </section>

      {/* NAVIGATION TABS */}
      <nav className='resource-tabs'>
        {[
          { name: "all", label: "All", icon: <FaGlobe /> },
          { name: "articles", label: "Articles", icon: <FaBook /> },
          { name: "ebooks", label: "E-books", icon: <FaFileAlt /> },
        ].map((tab) => (
          <a
            key={tab.name}
            href={`#${tab.name}`}
            className={activeSection === tab.name ? "active" : ""}
            onClick={() => setActiveSection(tab.name)}
          >
            {tab.icon}
            {tab.label}
          </a>
        ))}
      </nav>

      {/* RESOURCES LIST */}
      <section className='resources-list'>
        <h2>
          {activeSection === "all"
            ? "All Resources"
            : activeSection === "articles"
            ? "Articles & Guides"
            : "E-books & Documents"}
        </h2>

        <div className='resources-grid'>
          {getDisplayedResources().map((item) => (
            <div className='resource-item' key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className='item-info'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {activeSection === "ebooks" || item.link?.includes("http") ? (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='download-link'
                  >
                    <FaDownload /> Download
                  </a>
                ) : (
                  <a href={item.link || "#"} className='read-link'>
                    Read More <FaArrowRight />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADMIN INSIGHTS */}
      <section className='admin-insights'>
        <h2>
          <FaPenFancy className='icon' /> Daily Insights
        </h2>
        <p className='subtitle'>
          Reflections from our admin’s journey — inspiring consistency, purpose,
          and growth.
        </p>

        <div className='search-box insights-search'>
          <FaSearch className='icon' />
          <input
            type='text'
            placeholder='Search insights...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='insights-grid'>
          {filteredInsights.length > 0 ? (
            filteredInsights.map((insight) => (
              <div className='insight-card' key={insight.id}>
                <h3>
                  <FaLightbulb className='inline-icon' /> {insight.title}
                </h3>
                <span className='date'>{insight.date}</span>
                <p>{insight.desc}</p>
                <button className='resources-read-more'>Read More</button>
              </div>
            ))
          ) : (
            <p className='no-results'>No insights match your search.</p>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className='faq-section'>
        <div className='faq-header'>
          <h2>
            <FaLightbulb /> Frequently Asked Questions
          </h2>
          <p>Find answers to some of the most common inquiries.</p>
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

      {/* MODERN CTA SECTION */}
      <section className='modern-cta'>
        <div className='cta-card'>
          <div className='cta-content'>
            <h2>Stay Inspired & Informed</h2>
            <p className='ctext-name'>
              Join our learning community and be the first to receive the latest
              articles, digital resources, and reflections directly in your
              inbox. No spam, just thoughtful content designed to empower your
              personal and academic journey.
            </p>
            <div className='cta-form'>
              <input type='email' placeholder='Enter your email address' />
              <button>
                <FaEnvelope /> Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
