import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Homepage/Layout/Layout";
import LatestCauses from "./Pages/LatestCauses";
import SocialEvents from "./Pages/SocialEvents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<h1>Welcome to the Homepage</h1>} />
          <Route path="about" element={<h1>About Us</h1>} />
          <Route path="contact" element={<h1>Contact Us</h1>} /> */}
          <Route path="/latestcauses" element={<LatestCauses />} />
          <Route path="/events" element={<SocialEvents />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
