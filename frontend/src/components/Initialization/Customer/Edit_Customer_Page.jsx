import React, { useState } from 'react';
import Navbar_Customer from './Navbar_Customer';
import Button from '../../../intel_components/Button';

const Edit_Customer_Page = () => {
  // State variables to keep track of form input values
  const [name, setName] = useState('');
  const [addressContact, setAddressContact] = useState('');
  const [ownerCertificate, setOwnerCertificate] = useState(null);
  const [rvDns, setRvDns] = useState('');
  const [rvIp, setRvIp] = useState('');
  const [rvPort, setRvPort] = useState('');
  const [protocol, setProtocol] = useState('http'); // Default protocol is HTTP

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission with the updated customer details
    console.log('Name:', name);
    console.log('Address/Contact:', addressContact);
    console.log('Owner Certificate:', ownerCertificate);
    console.log('RV DNS:', rvDns);
    console.log('RV IP:', rvIp);
    console.log('RV Port:', rvPort);
    console.log('Protocol:', protocol);
    // You can send the form data to the backend or perform any other actions here
  };

  return (
    <>
      <Navbar_Customer />
      <div className="container max-w-lg gap-3 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">Edit Customer Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 my-4">
          {/* Name */}
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" />

          {/* Address/Contact */}
          <textarea placeholder="Address/Contact" value={addressContact} onChange={(e) => setAddressContact(e.target.value)} required className="form-control" />

          {/* Owner Certificate */}
          <div>
            <label htmlFor="ownerCertificate">Owner Certificate:</label>
            <input type="file" id="ownerCertificate" onChange={(e) => setOwnerCertificate(e.target.files[0])} className="form-control" />
          </div>

          {/* RV DNS */}
          <input type="text" placeholder="RV DNS" value={rvDns} onChange={(e) => setRvDns(e.target.value)} required className="form-control" />

          {/* RV IP */}
          <input type="text" placeholder="RV IP" value={rvIp} onChange={(e) => setRvIp(e.target.value)} required className="form-control" />

          {/* RV Port */}
          <input type="text" placeholder="RV Port" value={rvPort} onChange={(e) => setRvPort(e.target.value)} required className="form-control" />

          {/* Protocol */}
          <div>
            <label>Protocol:</label>
            <div className="flex gap-3">
              <label>
                <input type="radio" value="http" checked={protocol === 'http'} onChange={() => setProtocol('http')} required />
                HTTP
              </label>
              <label>
                <input type="radio" value="https" checked={protocol === 'https'} onChange={() => setProtocol('https')} required />
                HTTPS
              </label>
            </div>
          </div>

          {/* Update Button */}
          <Button type="submit" btn_type="primary" text="Update" />
        </form>
      </div>
    </>
  );
};

export default Edit_Customer_Page;
