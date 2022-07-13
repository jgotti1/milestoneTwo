import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import axios from "axios";

function CreateProp() {
  const [citrusProp, setCitrusProp] = useState({
    property_name: "",
    property_address: "",
    property_size: "",
  });

  const createProp = () => {
    axios.post("http://localhost:5000/citrus", citrusProp).then(() => {
      window.location.reload(false);
    });
  };
  // ****** Delete data function *******
  // const deleteData = (id) => {
  //   axios.delete(`http://localhost:5000/citrus/${id}`).then(() => {
  //     window.location.reload(false);
  //   });
  // };

  return (
    <div className="create-div">
      <h2>Create Order Form</h2>
      <Box>
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Property Name"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, property_name: event.target.value });
          }}
        />
      </Box>
      <br></br>
      <Box>
        <TextField
          helperText="Please enter property address"
          id="demo-helper-text-aligned"
          label="Property Address"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, property_address: event.target.value });
          }}
        />
      </Box>
      <br />
      <Box>
        <TextField
          helperText="Please enter property size"
          id="demo-helper-text-aligned"
          label="Property Size"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, property_size: event.target.value });
          }}
        />
      </Box>
      <br />
      {/* <Button className="create_button" variant="contained" color="primary" onClick={createProp}>
        Enter Order
      </Button> */}
    </div>
  );
}

export default CreateProp;
