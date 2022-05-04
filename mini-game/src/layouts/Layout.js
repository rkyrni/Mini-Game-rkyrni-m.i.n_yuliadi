import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <div className={`w-full min-h-screen h-full text-gray-600`}>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
