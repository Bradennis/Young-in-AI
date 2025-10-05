import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NewsPage.css";
import newsBanner from "../assets/news-banner.png";
import news1 from "../assets/dataScience1.jpg";

// sample articles (replace with API data)
const sampleArticles = [
  {
    id: 1,
    title: "Wellness Seminar for Students",
    excerpt:
      "Join us for our annual seminar focusing on mental health awareness and stress management techniques.",
    category: "Events",
    date: "Sept 21, 2025",
    image: newsBanner,
  },
  {
    id: 2,
    title: "New Counseling Center Opens",
    excerpt:
      "Our new student counseling center is now open, offering a variety of wellness services.",
    category: "News",
    date: "Sept 10, 2025",
    image: news1,
  },
  {
    id: 3,
    title: "Health Week 2025",
    excerpt:
      "Health Week is back with free screenings, fitness challenges, and inspirational talks.",
    category: "Events",
    date: "Aug 29, 2025",
    image: news1,
  },
  {
    id: 4,
    title: "AI & Wellness Initiative Launched",
    excerpt:
      "A new AI-powered platform is here to help students track mental health and wellness goals.",
    category: "Announcements",
    date: "Aug 20, 2025",
    image: news1,
  },
];

const sampleUpcoming = [
  {
    id: 101,
    title: "Young Innovators Hackathon",
    date: "Nov 12, 2025 • 09:00",
    location: "Tech Center",
  },
  // put real upcoming events here
];

const samplePreviousEvents = [
  {
    id: 201,
    title: "AI Bootcamp for Teens",
    date: "Sept 21, 2025",
    image: news1,
  },
  {
    id: 202,
    title: "Women in STEM Panel",
    date: "Oct 05, 2025",
    image: news1,
  },
];

const CATEGORIES = [
  "All Updates",
  "Company News",
  "Press Releases",
  "Announcements",
  "Industry News",
];

export default function NewsPage() {
  const [filter, setFilter] = useState("All Updates");
  const [search, setSearch] = useState("");

  // filter + search logic
  const filtered = sampleArticles.filter((a) => {
    const matchesCategory =
      filter === "All Updates" ? true : a.category === filter;
    const matchesSearch =
      search.trim() === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const total = filtered.length;
  const showingFrom = total > 0 ? 1 : 0;
  const showingTo = total > 0 ? total : 0;

  const featured = filtered.length > 0 ? filtered[0] : null;
  const rest = filtered.length > 1 ? filtered.slice(1) : [];

  return (
    <div className='news-page'>
      {/* HERO */}
      <div
        className='news-hero'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0) 75%), url(${newsBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className='hero-content'>
          <div className='breadcrumb'>
            <Link to='/'>Home</Link> / <span>News & Events</span>
          </div>

          <h1>
            Stay Informed.{" "}
            <span style={{ color: "white" }}>Stay Inspired.</span> Stay Ahead.
          </h1>
          <p className='news-subtitle'>
            From groundbreaking innovations to empowering programs, our News &
            Events keep you connected to the latest in AI, STEM, and the vibrant
            Young in AI community.
          </p>
        </div>
      </div>

      {/* FILTERS + SEARCH (with bottom border) */}
      <div className='news-controls'>
        <div className='news-filters'>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='news-search'>
          <input
            type='text'
            placeholder='Search news, titles...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type='button'
            onClick={() => {
              /* optional: trigger search */
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* LATEST NEWS ROW: main + sidebar */}
      <section className='latest-section'>
        <div className='latest-left'>
          <div className='latest-header'>
            <h2>Latest News</h2>
            <div className='showing'>
              Showing {showingFrom} - {showingTo} of {total} articles
            </div>
          </div>

          {/* Featured article: image left, text right */}
          {featured ? (
            <article className='featured-article'>
              <div className='featured-img'>
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className='featured-body'>
                <div className='meta-row'>
                  <span className='cat-tag'>{featured.category}</span>
                  <span className='date'>{featured.date}</span>
                </div>
                <h3 className='featured-title'>{featured.title}</h3>
                <p className='featured-excerpt'>{featured.excerpt}</p>
                <Link to={`/news/${featured.id}`} className='read-more'>
                  Read full story →
                </Link>
              </div>
            </article>
          ) : (
            <p>No articles found.</p>
          )}

          {/* small cards below the featured */}
          <div className='news-grid'>
            {rest.map((article) => (
              <div className='news-card' key={article.id}>
                <div className='card-left'>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className='card-right'>
                  <div className='card-meta'>
                    <span className='cat-tag'>{article.category}</span>
                    <span className='date'>{article.date}</span>
                  </div>
                  <h4>{article.title}</h4>
                  <p>{article.excerpt}</p>
                  <Link to={`/news/${article.id}`} className='read-more'>
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR: Upcoming & Previous Events */}
        <aside className='latest-right'>
          <div className='sidebar-card'>
            <h4>Upcoming Events</h4>
            {sampleUpcoming.length ? (
              <ul className='upcoming-list'>
                {sampleUpcoming.map((ev) => (
                  <li key={ev.id}>
                    <div className='up-title'>{ev.title}</div>
                    <div className='up-meta'>
                      {ev.date} • {ev.location}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className='no-events'>No upcoming events</div>
            )}
          </div>

          <div className='sidebar-card'>
            <h4>Previous Events</h4>
            <div className='previous-grid'>
              {samplePreviousEvents.map((ev) => (
                <div className='prev-item' key={ev.id}>
                  <img src={ev.image} alt={ev.title} />
                  <div className='prev-body'>
                    <div className='prev-title'>{ev.title}</div>
                    <div className='prev-date'>{ev.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
