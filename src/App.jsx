import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Homepage/Layout/Layout';
import About from './Pages/About/About';
import LatestCause from './Pages/LatestCause/LatestCause';
import SocialEvents from './Pages/SocialEvents/SocialEvents';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/LatestCause" element={<LatestCause />} />
        <Route path="/socialEvents" element={<SocialEvents />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogDetail" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
