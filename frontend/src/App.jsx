import { Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import Admin_Init_page from "./pages/Admin_Init_Page";
import BMO_Deploy_Server from "./pages/BMO_Deploy_Server";
import BMO_Init_Server from "./pages/BMO_Init_Server";
import Add_Customer from "./components/Admin/Add_Customer";
import Device_Dashboard_Admin from "./components/Admin/Device_Dashboard_Admin";
import Device_Dashboard_Customer from "./components/Customer/Device_Dashboard_Customer";
import Customer_Details from "./components/Customer_Details";
import Download_Micro_OsImage from "./components/Download_Micro_OsImage";
import Help_About_Us from "./components/Help_About_Us";
import Order_Details from "./components/Order_Details";
import Update_rv_info from "./components/Update_rv_info";
import Customer_Init_Page from "./pages/Customer_Init_Page";
import Button from "./intel_components/Button";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/init" element={<BMO_Init_Server />} />
        <Route path="/deploy" element={<BMO_Deploy_Server />} />

        {/* Admin subpages */}
        <Route path="/admin/update_rv_info" element={<Update_rv_info />} />
        <Route
          path="/admin/device_dashboard"
          element={<Device_Dashboard_Admin />}
        />
        <Route path="/admin/order_details" element={<Order_Details />} />
        <Route
          path="/admin/download_micro_osimage"
          element={<Download_Micro_OsImage />}
        />
        <Route path="/admin/customer_details" element={<Customer_Details />} />
        <Route path="/admin/help_about_us" element={<Help_About_Us />} />
        <Route path="/admin/add_customer" element={<Add_Customer />} />

        {/* Customer subpages */}
        <Route
          path="/customer/device_dashboard"
          element={<Device_Dashboard_Customer customer={"Customer"} />}
        />

        {/* Admin page */}
        <Route path="/admin" element={<Admin_Init_page username={"Admin"} />} />

        {/* Customer page */}
        <Route path="/customer" element={<Customer_Init_Page username={"Customer"} />} />

        {/* Home page */}
        <Route path="/*" element={<Home />} />

      </Routes>
    </>
  );
};

export default App;
