import React from 'react';
import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <div className={`w-full min-h-screen h-full text-gray-600`}>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;
