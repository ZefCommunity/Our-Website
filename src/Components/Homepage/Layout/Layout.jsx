import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Firstsection from '../Herosection/Firstsection'
import Secondsection from '../Herosection/Secondsection'
import Thirdsection from '../Herosection/Thirdsection'
import { Outlet } from 'react-router-dom'
import Fourthsection from '../Herosection/Fourthsection'
import Fifthsection from '../Herosection/Fifthsection'
import Sixthsection from '../Herosection/Sixthsection'
import Seventhsection from '../Herosection/Seventhsection'
import Eightsection from '../Herosection/Eightsection'
import Ninthsection from '../Herosection/Ninthsection'
import Tenthsection from '../Herosection/Tenthsection'
import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Fourthsection/>
      <Fifthsection/>
      <Sixthsection/>
      <Seventhsection/>
      <Eightsection/>
      <Ninthsection/>
      <Tenthsection/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
