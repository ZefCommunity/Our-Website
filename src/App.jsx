import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ZEF_META_DESCRIPTION, ZEF_NAME } from './config/branding';
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
    document.title = `${ZEF_NAME} (ZEF)`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', ZEF_META_DESCRIPTION);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
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

