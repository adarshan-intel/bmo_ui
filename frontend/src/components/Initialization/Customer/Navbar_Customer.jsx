import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../intel_components/Button';

const Navbar_Customer = ({ username }) => {
  const navigate = useNavigate();
  const navigationHeaders = ['Update default RV Info', 'Device Dashboard', 'OV Manipulation', 'Edit Customer profile', 'Help/About Us'];
  const navigationHeadersMap = {
    'Update default RV Info': '/update_rv_info',
    'Device Dashboard': '/device_dashboard',
    'OV Manipulation': '/ov_manipulation',
    'Edit Customer profile': '/edit_customer_profile',
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
    // TODO - handle logout cases
    navigate('/');
  };

  const handleProfile = () => {
    // display user profile
    setAnchorEl(null);
    // TODO
    navigate('/customer/profile');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            BMO Initialization Server
          </Typography>
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
              <MenuItem onClick={handleProfile}>{username} Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <nav className="bg-gray-200 py-4">
        <ul className="flex justify-center gap-10 list-none">
          {navigationHeaders.map((header, index) => (
            <li key={index}>
              <Button text={header} onClick={() => navigate('/customer' + navigationHeadersMap[header])} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar_Customer;
