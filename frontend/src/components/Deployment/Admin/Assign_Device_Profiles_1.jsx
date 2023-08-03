import React from 'react';
import Navbar_Deploy from '../Navbar_Deploy';
import { DataGrid } from '@mui/x-data-grid';
import { MenuItem, Select } from '@mui/material';
import Button from '../../../intel_components/Button';
import { useState } from 'react';

const Assign_Device_Profiles_1 = () => {
  // Sample data for the DataGrid (devices yet to be onboarded)
  const devicesData = [
    {
      id: 1,
      deviceID: 'Device123',
      deviceStatus: 'Pending',
      connection: 'Ethernet',
      ownershipVoucher: 'voucher_link_1',
      logs: 'log_link_1',
      deviceProfileID: 'null',
    },
    {
      id: 2,
      deviceID: 'Device456',
      deviceStatus: 'Pending',
      connection: 'Wi-Fi',
      ownershipVoucher: 'voucher_link_2',
      logs: 'log_link_2',
      deviceProfileID: 'null',
    },
    // Add more data as needed...
  ];

  // Define columns for the DataGrid
  const columns = [
    { field: 'deviceID', headerName: 'Device ID', flex: 1 },
    { field: 'deviceStatus', headerName: 'Device Status', flex: 1 },
    { field: 'connection', headerName: 'Connection', flex: 1 },
    { field: 'ownershipVoucher', headerName: 'Ownership Voucher', flex: 1 },
    { field: 'logs', headerName: 'Logs', flex: 1 },
    { field: 'deviceProfileID', headerName: 'Device Profile ID', flex: 1 },
  ];

  // Sample data for device profiles (to populate the dropdown)
  const deviceProfilesData = [
    { id: 1, profileName: 'Ubuntu_22_04_Desktop' },
    { id: 2, profileName: 'RHEL 8.2_custom' },
    { id: 3, profileName: 'Debian 12 latest' },
    // Add more data as needed...
  ];

  // State variable to keep track of the selected device profile
  const [selectedDeviceProfile, setSelectedDeviceProfile] = useState('Ubuntu_22_04_Desktop');

  // Event handler for dropdown change
  const handleDeviceProfileChange = (event) => {
    setSelectedDeviceProfile(event.target.value);
  };

  // Event handler for the "Assign" button click
  const handleAssign = () => {
    // Implement the logic to assign the selected device profile to the device(s)
    // Update the deviceProfileID field in the devicesData array and reload page
    console.log('Assigning device profile:', selectedDeviceProfile);
  };

  return (
    <>
      <Navbar_Deploy />
      <div className="container mx-auto mt-5">
        <h3 className="text-center">Devices that are yet to be onboarded are displayed below.</h3>
        <div style={{ height: '100%', width: '100%' }}>
          {/* DataGrid displaying devices yet to be onboarded */}
          <DataGrid
            rows={devicesData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            className="shadow-2xl bg-blue-100 p-5"
            rowHeight={44}
            headerHeight={44}
          />
        </div>
        <div className="mt-10 flex justify-around my-20">
          {/* Choose device profile dropdown */}
          <Select
            value={selectedDeviceProfile}
            onChange={handleDeviceProfileChange}
            displayEmpty
            className="mr-2"
          >
            {deviceProfilesData.map((profile) => (
              <MenuItem key={profile.id} value={profile.profileName}>
                {profile.profileName}
              </MenuItem>
            ))}
          </Select>
          {/* Assign button */}
          <Button className="mt-10" btn_type="primary" onClick={handleAssign} text={'Assign'} />
        </div>
      </div>
    </>
  );
};

export default Assign_Device_Profiles_1;
