import React from 'react';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Button from '../../intel_components/Button';
import { useNavigate } from 'react-router-dom';

const Navbar_Deploy = () => {
  const navigate = useNavigate();
  const navigationHeaders = [
    'Device dashboard',
    'Upload new OVs',
    'Manage device profiles',
    'Assign Device Profiles',
    'Help/About Us',
  ];
  const navigationHeadersMap = {
    'Device dashboard': '/device_dashboard',
    'Upload new OVs': '/upload_ovs',
    'Manage device profiles': '/manage_device_profiles',
    'Assign Device Profiles': '/assign_device_profiles',
    'Help/About Us': '/help_about_us',
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    // TODO: Implement logout functionality
    navigate('/');
  };

  const handleProfile = () => {
    // display user profile
    setAnchorEl(null);
    // TODO: Navigate to user profile page
    navigate('/deploy/profile');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className="flex flex-grow">
            <h6 className="font-semibold text-xl">BMO Deployment Server</h6>
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
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
              <Button
                text={header}
                onClick={() => navigate('/deploy' + navigationHeadersMap[header])}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar_Deploy;
