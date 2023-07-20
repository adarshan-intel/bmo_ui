import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Order_details } from "../data/Order_details";
import Navbar_Admin from "./Admin/Navbar_Admin";

const Order_Details = () => {
  // Sample data for the table
  const [order_details, setOrder_details] = useState(Order_details);
  console.log(order_details);

  // State variables for filtering and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter the devices based on the search query
  const filteredOrders = order_details.filter((device) => {
    const query = searchQuery.toLowerCase();
    return (
      device.Customer.toLowerCase().includes(query) ||
      device.Device_Serial_No.toLowerCase().includes(query) ||
      device.Date_of_order.toLowerCase().includes(query)
    );
  });

  // Define columns for the DataGrid
  const columns = [
    { field: "Customer", headerName: "Customer", flex: 1 },
    { field: "Device_Serial_No", headerName: "Device_Serial_No", flex: 1 },
    { field: "Date_of_order", headerName: "Date_of_order", flex: 1 },
  ];

  return (
    <>
      <Navbar_Admin />
      <h1 className="text-4xl font-bold text-center mt-10">Order Details</h1>
      <div className="container mx-auto my-10 flex flex-col gap-4">
        <TextField
          label="Search orders"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={filteredOrders}
            columns={columns}
            pageSize={rowsPerPage}
            page={page}
            onPageChange={(newPage) => setPage(newPage)}
            onPageSizeChange={(newPageSize) => {
              setRowsPerPage(newPageSize);
              setPage(0);
            }}
            // sx={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
            className="shadow-2xl bg-blue-100 p-5"
            rowHeight={44}
            headerHeight={44}
          />
        </div>
      </div>
    </>
  );
};

export default Order_Details;
