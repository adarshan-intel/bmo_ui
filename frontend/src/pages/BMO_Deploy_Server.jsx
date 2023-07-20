import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const BMO_Deploy_Server = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 items-center my-10"
      >
        <h1 className="text-4xl font-bold">BMO Deployment Server</h1>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default BMO_Deploy_Server;
