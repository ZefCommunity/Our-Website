import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Homepage/Layout/Layout';
import About from './Pages/About/About';
import LatestCause from './Pages/LatestCause/LatestCause';
import SocialEvents from './Pages/SocialEvents/SocialEvents';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Contact from './Pages/Contact/Contact';
import Volunteer from './Pages/Volunteer/Volunteer';
import Partnerships from './Pages/Partnerships/Partnerships';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import { ScrollToHash } from './Components/Homepage/shared/ScrollToHash';
import { PageSEO } from './Components/seo/PageSEO';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <PageSEO />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/LatestCause" element={<LatestCause />} />
        <Route path="/socialEvents" element={<SocialEvents />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetail" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
