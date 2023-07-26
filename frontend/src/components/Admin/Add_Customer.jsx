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
    console.log('Contact:', contact);
    // Send form data to backend or do something else with it
    // navigate("/admin/customer_details"); // Assuming this line is for navigation, but it's commented out since it's not included in the modified version
  };

  return (
    <>
      <Navbar_Admin />
      <div className="container max-w-lg gap-3 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Add Customer</h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          {/* Contact */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-lg font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className='text-center'>
            <Button type="submit" btn_type="primary" text="Add Customer" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Add_Customer;
