import React, { useState } from 'react';
import Navbar_Customer from '../Customer/Navbar_Customer';
import Button from '../../../intel_components/Button';

const Update_rv_info_customer = () => {
  // State variables to keep track of form input values
  const [dns, setDns] = useState('');
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');
  const [protocol, setProtocol] = useState('http'); // Default protocol is HTTP
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Handle updating of customer info with form input values
    console.log(
      `Updating customer info with DNS: ${dns}, IP: ${ip}, Port: ${port}, Protocol: ${protocol}, Agree to Terms: ${agreeTerms}`
    );
  };

  return (
    <>
      <Navbar_Customer />
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">Update Customer Info</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center my-10">
          <div className="col-md-4">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                DNS
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomDNS"
                value={dns}
                onChange={(event) => setDns(event.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter a DNS.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                IP
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomIP"
                value={ip}
                onChange={(event) => setIp(event.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter an IP.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend">
                Port
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomPort"
                value={port}
                onChange={(event) => setPort(event.target.value)}
                required
              />
              <div className="invalid-feedback">Please enter a Port.</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group has-validation">
              <div className="flex justify-around gap-10 mx-auto">
                <label>
                  <input
                    type="radio"
                    value="http"
                    checked={protocol === 'http'}
                    onChange={() => setProtocol('http')}
                    required
                  />
                  HTTP
                </label>
                <label>
                  <input
                    type="radio"
                    value="https"
                    checked={protocol === 'https'}
                    onChange={() => setProtocol('https')}
                    required
                  />
                  HTTPS
                </label>
              </div>
              <div className="invalid-feedback">Please choose a Protocol.</div>
            </div>
          </div>
          <Button btn_type="primary" text={'Submit'} type="submit" />
        </form>
      </div>
    </>
  );
};

export default Update_rv_info_customer;
