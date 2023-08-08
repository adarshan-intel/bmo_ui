import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../intel_components/Button';

const Home = () => {
  const navigate = useNavigate();
  const handleInit = () => {
    // render BMO_Init_Server component
    navigate('/init');
  };
  const handleDeploy = () => {
    // render BMO_Deploy_Server component
    navigate('/deploy');
  };

  return (
    <div className="flex gap-6 items-center justify-center h-screen">
      
      <Button text={'BMO Initialization Server'} btn_type={'primary'} onClick={handleInit} />
      <Button text={'BMO Deployment Server'} btn_type={'success'} onClick={handleDeploy} />
    </div>
  );
};

export default Home;
