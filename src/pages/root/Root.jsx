import React from 'react';

import { Outlet } from 'react-router';
import Navber from '../../components/header/navber';
import Footer from '../../components/footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl m-auto'>
          <Navber></Navber>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;