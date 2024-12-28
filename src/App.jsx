import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Homepage/Layout/Layout';
import About from './Pages/About/About';
import LatestCause from './Pages/LatestCause/LatestCause';
import SocialEvents from './Pages/SocialEvents/SocialEvents';
import Blog from './Pages/Blog/Blog';
import BlogDetails from './Pages/BlogDetails/BlogDetails';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<About />} />
          <Route path="/LatestCause" element={<LatestCause />} />
          <Route path="/socialEvents" element={<SocialEvents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          {/* <Route path="contact" element={<h1>Contact Us</h1>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
