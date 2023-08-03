import React, { useState } from 'react';
import Navbar_Deploy from '../Navbar_Deploy';
import { MenuItem, Select, TextField } from '@mui/material';
import Button from '../../../intel_components/Button';

const Assign_Device_Profiles_2 = () => {
  // Sample data for dropdowns (you can update this with your actual data)
  const modeKeys = ['devmod:device', 'devmod:arch', 'devmod:sn'];
  const relationOptions = ['AND', 'OR', 'NOT'];
  const deviceProfiles = ['Ubuntu_22_04_Desktop', 'RHEL 8.2_custom', 'Debian 12 latest'];

  // State variables for selected values
  const [selectedModeKey, setSelectedModeKey] = useState('');
  const [modeValueText, setModeValueText] = useState('');
  const [selectedRelation, setSelectedRelation] = useState('');
  const [selectedDeviceProfile, setSelectedDeviceProfile] = useState('');

  // Event handlers for dropdown changes
  const handleModeKeyChange = (event) => {
    setSelectedModeKey(event.target.value);
  };

  const handleRelationChange = (event) => {
    setSelectedRelation(event.target.value);
  };

  const handleDeviceProfileChange = (event) => {
    setSelectedDeviceProfile(event.target.value);
  };

  // Event handler for "Assign" button click
  const handleAssign = () => {
    // Implement the logic to assign the device profile based on the selected rule
    console.log('Assigning device profile based on rule:', {
      modeKey: selectedModeKey,
      modeValue: modeValueText,
      relation: selectedRelation,
      deviceProfile: selectedDeviceProfile,
    });
  };

  return (
    <>
      <Navbar_Deploy />
      <div className="container mx-auto mt-5">
        <h3 className="text-center">
          Create rule to assign Device profile based on devmod property
        </h3>
        <div className="container">
          <div className="flex justify-center gap-4 mt-4">
            {/* Mode key dropdown */}
            <Select value={selectedModeKey} onChange={handleModeKeyChange} displayEmpty>
              <MenuItem value="" disabled>
                Choose Mode Key
              </MenuItem>
              {modeKeys.map((modeKey, index) => (
                <MenuItem key={index} value={modeKey}>
                  {modeKey}
                </MenuItem>
              ))}
            </Select>
            {/* Mode value textbox */}
            <TextField
              placeholder="Enter Mode Value"
              value={modeValueText}
              onChange={(e) => setModeValueText(e.target.value)}
            />
          </div>
          <div className="container flex justify-center gap-5 mt-10">
            {/* Relation dropdown */}
            <Select value={selectedRelation} onChange={handleRelationChange} displayEmpty>
              <MenuItem value="" disabled>
                Choose Relation
              </MenuItem>
              {relationOptions.map((relation, index) => (
                <MenuItem key={index} value={relation}>
                  {relation}
                </MenuItem>
              ))}
            </Select>
            {/* <Button variant="outlined">Extend</Button> */}
            <Button btn_type="primary" text={'Extend'} />
          </div>
        </div>
        <div className="container flex justify-center gap-5 mt-10">
          {/* Device profile dropdown */}
          <div className="flex justify-center mt-4">
            <Select value={selectedDeviceProfile} onChange={handleDeviceProfileChange} displayEmpty>
              <MenuItem value="" disabled>
                Choose Device Profile
              </MenuItem>
              {deviceProfiles.map((profile, index) => (
                <MenuItem key={index} value={profile}>
                  {profile}
                </MenuItem>
              ))}
            </Select>
          </div>
          {/* Assign button */}
          <div className="flex justify-center mt-4">
            {/* <Button variant="contained" color="primary" onClick={handleAssign}>
            Assign
          </Button> */}
            <Button btn_type="primary" onClick={handleAssign} text={'Assign'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Assign_Device_Profiles_2;
