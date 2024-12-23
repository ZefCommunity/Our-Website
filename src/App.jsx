import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Homepage/Layout/Layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          {/* <Route index element={<h1>Welcome to the Homepage</h1>} />
          <Route path="about" element={<h1>About Us</h1>} />
          <Route path="contact" element={<h1>Contact Us</h1>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
