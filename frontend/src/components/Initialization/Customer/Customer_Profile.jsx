import React from 'react';
import Navbar_Customer from './Navbar_Customer';

const Customer_Profile = () => {
  // Dummy user data for demonstration purposes
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    address: '123 Main Street, City, Country',
    // profilePic: 'https://example.com/profile-pic.jpg', // URL to the user's profile picture
  };

  return (
    <>
      <Navbar_Customer />
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold text-center mb-6">User Profile</h1>
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <p className="text-gray-600 mb-4">Age: {user.age}</p>
            <p className="text-gray-600 mb-4">Address: {user.address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer_Profile;
