import React from 'react';
import Navbar_Admin from '../components/Admin/Navbar_Admin';
import Navbar_Customer from '../components/Customer/Navbar_Customer';

const Customer_Init_Page = ({ username }) => {
  return (
    <>
      <Navbar_Customer />
      <p className="text-center m-10">
        Navigate to customer subpages from the above navigation bar
      </p>
    </>
  );
};

export default Customer_Init_Page;
