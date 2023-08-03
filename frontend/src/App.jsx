import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Admin_Init_page from './pages/Admin_Init_Page';
import BMO_Deploy_Server from './pages/BMO_Deploy_Server';
import BMO_Init_Server from './pages/BMO_Init_Server';
import Add_Customer from './components/Initialization/Admin/Add_Customer';
import Device_Dashboard_Admin from './components/Initialization/Admin/Device_Dashboard_Admin';
import Device_Dashboard_Customer from './components/Initialization/Customer/Device_Dashboard_Customer';
import Customer_Details from './components/Customer_Details';
import Download_Micro_OsImage from './components/Download_Micro_OsImage';
import Help_About_Us from './components/Help_About_Us';
import Order_Details from './components/Order_Details';
import Update_rv_info from './components/Update_rv_info';
import Customer_Init_Page from './pages/Customer_Init_Page';
import Admin_Profile from './components/Initialization/Admin/Admin_Profile';
import Update_rv_info_customer from './components/Initialization/Customer/Update_rv_info_customer';
import Customer_Profile from './components/Initialization/Customer/Customer_Profile';
import OV_Manipulation from './components/Initialization/Customer/OV_Manipulation';
import OV_Manipulation_Options from './components/Initialization/Customer/OV_Manipulation_Options';
import Edit_Customer_Page from './components/Initialization/Customer/Edit_Customer_Page';
import Help_About_Us_customer from './components/Initialization/Customer/Help_About_Us_customer';
import Admin_Init_Deploy from './components/Deployment/Admin/Admin_Init_Deploy';
import Device_Dashboard_Admin_Deploy from './components/Deployment/Admin/Device_Dashboard_Admin_Deploy';
import Upload_OVs from './components/Deployment/Admin/Upload_OVs';
import Manage_Device_Profiles from './components/Deployment/Admin/Manage_Device_Profiles';
import Assign_Device_Profiles from './components/Deployment/Admin/Assign_Device_Profiles';
import Help_About_Us_Deploy from './components/Deployment/Admin/Help_About_Us_Deploy';
import Assign_Device_Profiles_1 from './components/Deployment/Admin/Assign_Device_Profiles_1';
import Assign_Device_Profiles_2 from './components/Deployment/Admin/Assign_Device_Profiles_2';
import Deploy_Profile from './components/Deployment/Admin/Deploy_Profile';

const App = () => {
  return (
    <>
      <Routes>
        {/* 1. BMO_Init_Server */}
        <Route path="/init" element={<BMO_Init_Server />} />
        {/* Admin subpages */}
        <Route path="/admin/update_rv_info" element={<Update_rv_info />} />
        <Route path="/admin/device_dashboard" element={<Device_Dashboard_Admin />} />
        <Route path="/admin/order_details" element={<Order_Details />} />
        <Route path="/admin/download_micro_osimage" element={<Download_Micro_OsImage />} />
        <Route path="/admin/customer_details" element={<Customer_Details />} />
        <Route path="/admin/help_about_us" element={<Help_About_Us />} />
        <Route path="/admin/add_customer" element={<Add_Customer />} />
        <Route path="/admin/profile" element={<Admin_Profile />} />
        {/* Customer subpages */}
        <Route
          path="/customer/device_dashboard"
          element={<Device_Dashboard_Customer customer={'Customerx'} />}
        />
        <Route path="/customer/update_rv_info" element={<Update_rv_info_customer />} />
        <Route path="/customer/profile" element={<Customer_Profile />} />
        <Route path="/customer/ov_manipulation/1" element={<OV_Manipulation_Options />} />
        <Route path="/customer/ov_manipulation" element={<OV_Manipulation />} />
        <Route path="/customer/edit_customer_profile" element={<Edit_Customer_Page />} />
        <Route path="/customer/help_about_us" element={<Help_About_Us_customer />} />
        {/* Main pages */}
        <Route path="/admin" element={<Admin_Init_page username={'Admin'} />} />
        <Route path="/customer" element={<Customer_Init_Page username={'Customerx'} />} />

        {/* 2. BMO_Deploy_Server */}
        <Route path="/deploy" element={<BMO_Deploy_Server />} />
        <Route path="/deploy/admin" element={<Admin_Init_Deploy />} />

        <Route
          path="/deploy/device_dashboard"
          element={<Device_Dashboard_Admin_Deploy customer={'Customerx'} />}
        />
        <Route path="/deploy/upload_ovs" element={<Upload_OVs />} />
        <Route path="/deploy/manage_device_profiles" element={<Manage_Device_Profiles />} />
        <Route path="/deploy/assign_device_profiles/1" element={<Assign_Device_Profiles_1 />} />
        <Route path="/deploy/assign_device_profiles/2" element={<Assign_Device_Profiles_2 />} />
        <Route path="/deploy/assign_device_profiles" element={<Assign_Device_Profiles />} />

        <Route path="/deploy/help_about_us" element={<Help_About_Us_Deploy />} />
        <Route path='/deploy/profile' element={<Deploy_Profile/>}/>

        {/* Home page to select Init or Deploy Server*/}
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
