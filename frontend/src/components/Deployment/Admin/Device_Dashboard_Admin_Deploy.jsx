import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar_Deploy from '../Navbar_Deploy';
import { device_data } from '../../../data/Device_data';

const Device_Dashboard_Admin_Deploy = ({ customer }) => {
  const filtered_devices = device_data.filter((device) => device.ownership === customer);

  const [devices, setDevices] = useState(filtered_devices);

  // State variables for filtering and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter the devices based on the search query
  const filteredDevices = devices.filter((device) => {
    const query = searchQuery.toLowerCase();
    return (
      device.Device_serialNo.toLowerCase().includes(query) ||
      device.Device_status.toLowerCase().includes(query) ||
      device.ownership.toLowerCase().includes(query)
    );
  });

  // Define columns for the DataGrid
  const columns = [
    { field: 'Device_serialNo', headerName: 'Device_serialNo', flex: 1 },
    { field: 'Device_status', headerName: 'Device_status', flex: 1 },
    { field: 'ownership', headerName: 'Ownership', flex: 1 },
    {
      field: 'Ownership_voucher',
      headerName: 'Ownership_voucher',
      flex: 1,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          Click_to_download
        </a>
      ),
    },
  ];

  return (
    <>
      <Navbar_Deploy /> {/* Render the Navbar_Deploy component */}
      <h1 className="text-4xl font-bold text-center mt-10">Device Dashboard Admin Deploy</h1>
      <div className="container mx-auto my-10 flex flex-col gap-4">
        <input
          type="text"
          className="form-control"
          id="searchDevices"
          placeholder="Search Devices"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <div style={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={filteredDevices}
            columns={columns}
            pageSize={rowsPerPage}
            page={page}
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => {
              setRowsPerPage(newPageSize);
              setPage(0);
            }}
            className="shadow-2xl bg-blue-100 p-5"
            rowHeight={44}
            headerHeight={44}
          />
        </div>
      </div>
    </>
  );
};

export default Device_Dashboard_Admin_Deploy;
