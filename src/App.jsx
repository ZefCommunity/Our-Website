import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Homepage/Layout/Layout';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader';
import { ScrollToHash } from './Components/Homepage/shared/ScrollToHash';
import { CanonicalRedirects } from './Components/seo/CanonicalRedirects';
import { PageSEO } from './Components/seo/PageSEO';
import { Analytics } from './lib/analytics';
import { PageLoadFallback } from './Components/shared/PageLoadFallback';
import { APP_LOADER_MAX_MS } from './config/performance';

// Route-level code splitting — homepage Layout stays eager for faster LCP
const About = lazy(() => import('./Pages/About/About'));
const LatestCause = lazy(() => import('./Pages/LatestCause/LatestCause'));
const SocialEvents = lazy(() => import('./Pages/SocialEvents/SocialEvents'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));
const BlogDetails = lazy(() => import('./Pages/BlogDetails/BlogDetails'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Volunteer = lazy(() => import('./Pages/Volunteer/Volunteer'));
const Partnerships = lazy(() => import('./Pages/Partnerships/Partnerships'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const finish = () => setLoading(false);

    if (document.readyState === 'complete') {
      finish();
      return undefined;
    }

    window.addEventListener('load', finish, { once: true });
    const cap = window.setTimeout(finish, APP_LOADER_MAX_MS);

    return () => {
      window.removeEventListener('load', finish);
      window.clearTimeout(cap);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <PageSEO />
      <CanonicalRedirects />
      <Analytics />
      <ScrollToHash />
      <Navbar />
      <Suspense fallback={<PageLoadFallback />}>
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
