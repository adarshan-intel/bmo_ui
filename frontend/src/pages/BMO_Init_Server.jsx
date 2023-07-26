import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../intel_components/Button';

const BMO_Init_Server = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    }
    if (username === 'customer' && password === 'customer') {
      navigate('/customer');
    }
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center my-10"
      >
        <h1 className="text-4xl font-bold">BMO Initialization Server</h1>
        <div className="col-md-4">
          {/* Username */}
          {/* <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label> */}
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Username
            </span>
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              value={username}
              onChange={handleUsernameChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Password */}
          {/* <label htmlFor="validationCustomPassword" className="form-label">
            Password
          </label> */}
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              id="validationCustomPassword"
              value={password}
              onChange={handlePasswordChange}
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a Password.</div>
          </div>
        </div>
        <div className="col-12 items-center text-center">
          <Button
            btn_type="primary"
            text={'Sign In'}
            type="submit"
            onClick={handleSubmit}
            onKeyPress={handleEnter}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default BMO_Init_Server;
