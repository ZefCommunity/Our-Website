import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Homepage/Layout/Layout";
import LatestCauses from "./Pages/LatestCauses";
import SocialEvents from "./Pages/SocialEvents";
import Contact from "./Components/Contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" index element={<Layout />}/>
          <Route path="/latestcauses" element={<LatestCauses />} />
          <Route path="/events" element={<SocialEvents />} />
          <Route path="/contactus" element={<Contact/>}  />
      </Routes>
    </>
  );
}

export default App;
