import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { customer_details } from '../data/Customer_details';
import Navbar_Admin from './Initialization/Admin/Navbar_Admin';
import Button from '../intel_components/Button';

const Customer_Details = () => {
  const navigate = useNavigate();
  // Sample data for the table
  const [customers, setcustomers] = useState(customer_details);

  // State variables for filtering and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter the customers based on the search query
  const filteredcustomers = customers.filter((device) => {
    const query = searchQuery.toLowerCase();
    return device.Name.toLowerCase().includes(query) || device.CustomerID.toLowerCase().includes(query) || device.Contact_Address.toLowerCase().includes(query);
  });

  // Define columns for the DataGrid
  const columns = [
    { field: 'Name', headerName: 'Name', flex: 1 },
    { field: 'CustomerID', headerName: 'CustomerID', flex: 1 },
    { field: 'Contact_Address', headerName: 'Contact_Address', flex: 1 },
    {
      field: 'Owner_Certificate',
      headerName: 'Owner_Certificate',
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
      <Navbar_Admin />
      <h1 className="text-4xl font-bold text-center mt-10">Customer Details</h1>
      <div className="container mx-auto my-10 flex flex-col gap-4">
        <input type="text" className="form-control" id="searchCustomers" placeholder="Search customers" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filteredcustomers}
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
      {/* Button to add more customer */}
      <div className="flex justify-center my-10">
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            // redirect to add_cusomter
            navigate('/admin/add_customer');
          }}
        >
          <AddIcon /> Add Customer
        </button> */}
        <Button
          text={
            <>
              <AddIcon />
              Add Customer
            </>
          }
          onClick={() => {
            '';
            // redirect to add_cusomter
            navigate('/admin/add_customer');
          }}
          btn_type="primary"
        />
      </div>
    </>
  );
};

export default Customer_Details;
