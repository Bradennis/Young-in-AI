import React from "react";
import "./Community.css";

const Community = () => (
  <div className='community-page'>
    <h1>Community</h1>
    <p>Student success stories, blog, AI news, and upcoming events.</p>
    <div className='community-cards'>
      <div className='community-card'>
        <h2>Success Story</h2>
        <p>
          Kwame built his first robot and won the Young Innovators Challenge!
        </p>
      </div>
      <div className='community-card'>
        <h2>Blog Highlight</h2>
        <p>Read our latest post: "How AI is Changing Education in Ghana"</p>
      </div>
      <div className='community-card'>
        <h2>Upcoming Event</h2>
        <p>AI Bootcamp for Teens – Sept 21, Innovation Hub</p>
      </div>
    </div>
  </div>
);

export default Community;
