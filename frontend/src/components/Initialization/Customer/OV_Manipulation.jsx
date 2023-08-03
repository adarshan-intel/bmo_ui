import React, { useState } from 'react';
import Navbar_Customer from './Navbar_Customer';
import { DataGrid } from '@mui/x-data-grid';
import Button from '../../../intel_components/Button';
import { useNavigate } from 'react-router-dom';

const OV_Manipulation = () => {
  const navigate = useNavigate();
  // Sample data for the table
  const rows = [
    {
      id: 1,
      option: 'Option 1',
      serialNo: 'ABC123',
      status: 'Active',
      ownership: 'Initialized',
      voucher: 'Click to download',
    },
    {
      id: 2,
      option: 'Option 2',
      serialNo: 'XYZ789',
      status: 'Inactive',
      ownership: 'Initialized',
      voucher: 'Click to download',
    },
    // Add more rows as needed
  ];

  // Define columns for the DataGrid
  const columns = [
    { field: 'option', headerName: 'Select option', flex: 1 },
    { field: 'serialNo', headerName: 'Device Serial No', flex: 1 },
    { field: 'status', headerName: 'Device status', flex: 1 },
    { field: 'ownership', headerName: 'Ownership', flex: 1 },
    {
      field: 'voucher',
      headerName: 'Ownership voucher',
      flex: 1,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          View Voucher
        </a>
      ),
    },
  ];

  // State variable to keep track of selected rows
  const [selectedRows, setSelectedRows] = useState([]);

  const handleNext = () => {
    //! TODO Access the selected rows here
    console.log('Selected Rows:', selectedRows);
    navigate('/customer/ov_manipulation/1');
    // TODO: Handle next button logic based on the selected rows
  };

  const onRowsSelectionHandler = (ids) => {
    // const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    // console.log(selectedRowsData);
    const selectedRows = ids.map((id) => id);
    console.log(selectedRows);
  };

  return (
    <>
      <Navbar_Customer />
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">OV Manipulation</h1>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </div>
        {/* Next button */}
        <div className="text-right m-10">
          <Button type="submit" btn_type="primary" text="Next" onClick={handleNext} />
        </div>
      </div>
    </>
  );
};

export default OV_Manipulation;
