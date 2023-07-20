import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Navbar_Admin from "./Admin/Navbar_Admin";

const Update_rv_info = () => {
  // State variables to keep track of form input values
  const [dns, setDns] = useState("");
  const [ip, setIp] = useState("");
  const [port, setPort] = useState(""); 
  const [protocol, setProtocol] = useState("http"); // Default protocol is HTTP

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Handle updating of RV info with form input values
    console.log(
      `Updating RV info with DNS: ${dns}, IP: ${ip}, Port: ${port}, Protocol: ${protocol}`
    );
  };

  return (
    <>
      <Navbar_Admin />
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">
          Update Default Rv server Info
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center my-10"
        >
          <TextField
            label="DNS"
            value={dns}
            onChange={(event) => setDns(event.target.value)}
          />
          <TextField
            label="IP"
            value={ip}
            onChange={(event) => setIp(event.target.value)}
          />
          <TextField
            label="Port"
            value={port}
            onChange={(event) => setPort(event.target.value)}
          />
          <RadioGroup
            value={protocol}
            onChange={(event) => setProtocol(event.target.value)}
          >
            <div className="flex">
              <FormControlLabel value="http" control={<Radio />} label="HTTP" />
              <FormControlLabel
                value="https"
                control={<Radio />}
                label="HTTPS"
              />
            </div>
          </RadioGroup>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Update_rv_info;
