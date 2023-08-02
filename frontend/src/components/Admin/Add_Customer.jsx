import React, { useState } from 'react';
import Navbar_Admin from '../Admin/Navbar_Admin';
import Button from '../../intel_components/Button'; // You need to import your custom Button component

const Add_Customer = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event) => {
    // TODO - Do form validation here
    event.preventDefault();
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Contact:', contasct);
    // Send form data to backend or do something else with it
    // navigate("/admin/customer_details"); // Assuming this line is for navigation, but it's commented out since it's not included in the modified version
  };

  return (
    <>
      <Navbar_Admin />
      <div className="container max-w-lg gap-3 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Add Customer</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Name
            </span>
            <input type="text" className="form-control" id="validationCustomUsername" value={name} onChange={(event) => setName(event.target.value)} aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">Please choose a Name.</div>
          </div>

          {/* Address/Contact */}
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Address/Contact
            </span>
            <input type="text" className="form-control w-96" id="validationCustomUsername" value={address} onChange={(event) => setAddress(event.target.value)} aria-describedby="inputGroupPrepend" required />
            <div className="invalid-feedback">Please choose a Address.</div>
          </div>

          <div className="text-center">
            <Button type="submit" btn_type="primary" text="Add Customer" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Add_Customer;
