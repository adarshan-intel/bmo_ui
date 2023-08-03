import React, { useState } from 'react';
import Navbar_Deploy from '../Navbar_Deploy';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../../../intel_components/Button';

const Upload_OVs = () => {
  // Sample data for the DataGrid
  const ovFilesData = [
    {
      id: 1,
      Device_ID: 'Device123',
      Device_status: 'Active',
      Connection: 'Ethernet',
      Ownership_voucher: 'voucher_link_1',
      Logs: 'log_link_1',
    },
    {
      id: 2,
      Device_ID: 'Device456',
      Device_status: 'Inactive',
      Connection: 'Wi-Fi',
      Ownership_voucher: 'voucher_link_2',
      Logs: 'log_link_2',
    },
    // Add more data as needed...
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Define columns for the DataGrid
  const columns = [
    { field: 'Device_ID', headerName: 'Device ID', flex: 1 },
    { field: 'Device_status', headerName: 'Device Status', flex: 1 },
    { field: 'Connection', headerName: 'Connection', flex: 1 },
    {
      field: 'Ownership_voucher',
      headerName: 'Ownership Voucher',
      flex: 1,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          View Voucher
        </a>
      ),
    },
    {
      field: 'Logs',
      headerName: 'Logs',
      flex: 1,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          View Logs
        </a>
      ),
    },
  ];

  return (
    <>
      <Navbar_Deploy />
      <div className="container">
        <div className="flex container mx-auto mt-5 justify-around my-5">
          <h1 className="text-2xl font-bold">Upload the OV files</h1>
          <Button text="Upload" btn_type="primary" />
        </div>
        {/* <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={ovFilesData} columns={columns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination className="shadow-2xl bg-blue-100 p-5" />
      </div> */}
        <div style={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={ovFilesData}
            columns={columns}
            pageSize={5}
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

export default Upload_OVs;
