import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar_Admin from "./Navbar_Admin";

const Add_Customer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (event) => {
    // TODO - Do form validation here
    event.preventDefault();
    console.log("Name:", name);
    console.log("Address:", address);
    console.log("Contact:", contact);
    // Send form data to backend or do something else with it
    navigate("/admin/customer_details");
  };

  return (
    <>
      <Navbar_Admin />
      <div className="container max-w-lg gap-3 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Add Customer</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Contact"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Add Customer
          </Button>
        </form>
      </div>
    </>
  );
};

export default Add_Customer;
