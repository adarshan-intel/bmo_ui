import React, { useState } from 'react';
import Button from '../../intel_components/Button';
import Navbar_Customer from './Navbar_Customer';

const OV_Manipulation_Options = () => {
  // State variable to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission based on the selected option
    console.log('Selected Option:', selectedOption);
  };

  return (
    <>
      <Navbar_Customer />
      <div className="container max-w-lg gap-3 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center">
          OV Manipulation Options
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10">
          <div>
            <input
              type="radio"
              id="prePopulated"
              name="option"
              value="prePopulated"
              checked={selectedOption === 'prePopulated'}
              onChange={handleOptionChange}
            />
            <label htmlFor="prePopulated" className="ml-2">
              Use pre-populated cert from DB
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              id="uploadNew"
              name="option"
              value="uploadNew"
              checked={selectedOption === 'uploadNew'}
              onChange={handleOptionChange}
            />
            <label htmlFor="uploadNew" className="ml-2">
              Upload new certificate
            </label>
            <div className="text-right">
              <Button type="submit" btn_type="primary" text="Upload" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OV_Manipulation_Options;
