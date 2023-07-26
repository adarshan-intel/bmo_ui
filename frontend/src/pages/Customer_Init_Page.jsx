import React from 'react';
import Navbar_Admin from '../components/Admin/Navbar_Admin';
import Navbar_Customer from '../components/Customer/Navbar_Customer';

const Customer_Init_Page = ({ username }) => {
  return (
    <>
      <Navbar_Customer />
      Customer page
    </>
  );
};

export default Customer_Init_Page;
