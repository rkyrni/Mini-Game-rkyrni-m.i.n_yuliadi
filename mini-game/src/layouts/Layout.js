import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <div
        className={`w-full min-h-screen h-full flex flex-col justify-center items-center text-gray-600`}>
        <Navigation />
        {props.children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
