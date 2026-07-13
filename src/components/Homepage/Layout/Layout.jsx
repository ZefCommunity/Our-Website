import React from 'react';

import Firstsection from '../Herosection/Firstsection';
import Secondsection from '../Herosection/Secondsection';
import Thirdsection from '../Herosection/Thirdsection';
import Fifthsection from '../Herosection/Fifthsection';
import Tenthsection from '../Herosection/Tenthsection';

const Layout = () => {
  return (
    <main
      id="homepage"
      className="overflow-x-hidden bg-white"
      aria-label="ZEF homepage"
    >
      <Firstsection />
      <Thirdsection />
      <Secondsection />
      <Tenthsection />
      <Fifthsection />
    </main>
  );
};

export default Layout;
