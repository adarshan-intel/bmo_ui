import React from 'react';
import Navbar_Admin from './Initialization/Admin/Navbar_Admin';
import Button from '../intel_components/Button';

const Download_Micro_OsImage = () => {
  const handleDownload = () => {
    // Create a new anchor element
    const link = document.createElement('a');
    // link.href = process.env.PUBLIC_URL + "/micro_os_image.bin";
    link.href = '../../public/os.txt';

    // Set the download attribute and filename
    link.setAttribute('download', 'os.txt');

    // Trigger the download by simulating a click on the anchor element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar_Admin />
      <h1 className="text-4xl font-bold text-center mt-10">Download Micro OsImage</h1>
      <div className="flex justify-center my-10">
        <Button text={'Download Micro OsImage'} onClick={handleDownload} btn_type="primary" />
      </div>
    </>
  );
};

export default Download_Micro_OsImage;
