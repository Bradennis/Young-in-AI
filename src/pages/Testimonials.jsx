import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "The AI & Data Science program transformed my career. The instructors were fantastic, and the content was practical and industry-focused.",
      name: "Jane Doe",
      role: "AI & Data Science Graduate",
      img: "/images/student1.jpg",
      type: "student",
    },
    {
      text: "Cybersecurity training here is top-notch. I landed a job within 3 months of graduation.",
      name: "Michael Smith",
      role: "Cybersecurity Specialist",
      img: "/images/student2.jpg",
      type: "student",
    },
    {
      text: "My consultation with the YoungIn AI team was insightful. Their guidance on AI adoption helped shape our company’s strategy.",
      name: "Dr. Sarah Lee",
      role: "Industry Consultant, TechCorp",
      img: "/images/professional1.jpg",
      type: "professional",
    },
    {
      text: "The YoungIn AI team provided valuable consultation on robotics integration. Their expertise was practical and highly applicable to our projects.",
      name: "David Kim",
      role: "R&D Manager, RoboTech",
      img: "/images/professional2.jpg",
      type: "professional",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className='testimonials-carousel'>
      <h2 className='test-title'>What People Are Saying</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className='testimonial-card'>
            <FaQuoteLeft className='quote-icon' />
            <p>“{t.text}”</p>
            <div className='author'>
              <img src={t.img} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
            <span
              className={`tag ${
                t.type === "student" ? "student-tag" : "professional-tag"
              }`}
            >
              {t.type === "student"
                ? "Student Experience"
                : "Consultation Feedback"}
            </span>
          </div>
        ))}
      </Slider>
    </div>
  );
}
