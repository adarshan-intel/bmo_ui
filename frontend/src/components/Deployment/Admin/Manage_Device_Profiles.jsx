import React from 'react';
import Navbar_Deploy from '../Navbar_Deploy';
import { DataGrid } from '@mui/x-data-grid';

const Manage_Device_Profiles = () => {
  // Sample data for the DataGrid
  const deviceProfilesData = [
    {
      id: 1,
      deviceProfileName: 'Ubuntu 22.04 Desktop basic​',
      deviceProfileID: 'c771325e​',
      yamlFile: 'https://www.intel.com/',
    },
    {
      id: 2,
      deviceProfileName: 'Ubuntu 22.04 Desktop basic​',
      deviceProfileID: 'c771325e​',
      yamlFile: 'https://www.intel.com/',
    },
    // Add more data as needed...
  ];

  // Define columns for the DataGrid
  const columns = [
    { field: 'deviceProfileName', headerName: 'Device Profile Name', flex: 1 },
    { field: 'deviceProfileID', headerName: 'Device Profile ID', flex: 1 },
    {
      field: 'yamlFile',
      headerName: 'YAML File',
      flex: 1,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          Click to view/edit
        </a>
      ),
    },
  ];

  return (
    <>
      <Navbar_Deploy />
      <div className="container">
        <div className="flex container mx-auto mt-5 justify-around my-5">
          <h1 className="text-2xl font-bold">Manage Device Profiles</h1>
        </div>
        <div style={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={deviceProfilesData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            className="shadow-2xl bg-blue-100 p-5"
            rowHeight={44}
            headerHeight={44}
          />
        </div>
      </div>
    </>
  );
};

export default Manage_Device_Profiles;
