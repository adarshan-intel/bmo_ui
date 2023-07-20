import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleInit = () => {
      // render BMO_Init_Server component
      navigate("/init");
    };
    const handleDeploy = () => {
      // render BMO_Deploy_Server component
      navigate("/deploy");
    };

  return (
    <div className="flex gap-6 items-center justify-center h-screen">
      <Button variant="contained" color="primary" onClick={handleInit}>
        BMO Initialization Server
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDeploy}>
        BMO Deployment Server
      </Button>
    </div>
  );
}

export default Home