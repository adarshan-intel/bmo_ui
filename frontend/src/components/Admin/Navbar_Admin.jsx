import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../frontend/src/dist/css/dlux.css'; // dlux-intel css file"
import Button from '../../intel_components/Button';

const Navbar_Admin = ({ username }) => {
  const navigate = useNavigate();
  const navigationHeaders = ['Update default RV Info', 'Device Dashboard', 'View/Post Order Details', 'Download Micro-OsImage', 'Customer Details', 'Help/About Us'];
  const navigationHeadersMap = {
    'Update default RV Info': '/update_rv_info',
    'Device Dashboard': '/device_dashboard',
    'View/Post Order Details': '/order_details',
    'Download Micro-OsImage': '/download_micro_osimage',
    'Customer Details': '/customer_details',
    'Help/About Us': '/help_about_us',
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    // TODO
    navigate('/');
  };

  const handleProfile = () => {
    // display user profile
    setAnchorEl(null);
    // TODO
    navigate('/admin/profile');
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div class="flex flex-grow">
            <h6 class="font-semibold text-xl">BMO Initialization Server</h6>
          </div>
          <div>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleProfile}>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <nav className="bg-gray-200 py-4">
        <ul className="flex justify-center gap-10 list-none">
          {navigationHeaders.map((header, index) => (
            <li key={index}>
              <Button text={header} onClick={() => navigate('/admin' + navigationHeadersMap[header])} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar_Admin;
