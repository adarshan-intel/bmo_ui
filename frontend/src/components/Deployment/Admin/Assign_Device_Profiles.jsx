import React, { useState } from 'react';
import Navbar_Deploy from '../Navbar_Deploy';
import Button from '../../../intel_components/Button';
import { useNavigate } from 'react-router-dom';

const Assign_Device_Profiles = () => {
  const navigate = useNavigate();

  // State variable to keep track of the selected option
  const [selectedOption, setSelectedOption] = useState('byDeviceId');

  // Event handler for radio button change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNext = () => {
    if (selectedOption === 'byDeviceId') navigate('1');
    else navigate('2');
  };

  return (
    <>
      <Navbar_Deploy />
      <div className="container mx-auto mt-5 text-center">
        <h1 className="text-2xl font-bold">Assign Device Profiles</h1>
        <div className="flex flex-col gap-4 mt-4">
          {/* Radio button options */}
          <div>
            <input
              type="radio"
              id="byDeviceId"
              value="byDeviceId"
              checked={selectedOption === 'byDeviceId'}
              onChange={handleOptionChange}
            />
            <label htmlFor="byDeviceId" className="ml-2">
              Assign from UI based on Device ID
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="byDeviceProperty"
              value="byDeviceProperty"
              checked={selectedOption === 'byDeviceProperty'}
              onChange={handleOptionChange}
            />
            <label htmlFor="byDeviceProperty" className="ml-2">
              Assign based on device property (devmod)
            </label>
          </div>
        </div>
        {/* Next button */}
        <div className="mt-10">
          <Button className="mt-10" btn_type="primary" onClick={handleNext} text={'Next'} />
        </div>
      </div>
    </>
  );
};

export default Assign_Device_Profiles;
