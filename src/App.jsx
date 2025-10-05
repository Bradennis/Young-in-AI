import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NewsPage from "./pages/NewsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/community' element={<Community />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/News & Events' element={<NewsPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
