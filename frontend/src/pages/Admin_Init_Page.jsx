import React from "react";
import Navbar_Admin from "../components/Admin/Navbar_Admin";

const Admin_Init_Page = ({ username  }) => {
  return (
    <div>
      <Navbar_Admin username={username} />
      <p className="text-center my-10">
        Select an option from the navigation bar to get started.
      </p>
    </div>
  );
};

export default Admin_Init_Page;
