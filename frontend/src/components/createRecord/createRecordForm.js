import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
<<<<<<< HEAD
import "./createRecordForm.css";
=======
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
import axios from "axios";

function CreateProp() {
  const [citrusProp, setCitrusProp] = useState({
<<<<<<< HEAD
    property_name: "",
    property_address: "",
    property_size: "",
=======
    street: "",
    state: "",
    city: "",
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
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
<<<<<<< HEAD
          label="Property Name"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, property_name: event.target.value });
=======
          label="State"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, state: event.target.value });
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
          }}
        />
      </Box>
      <br></br>
      <Box>
        <TextField
          helperText="Please enter property address"
          id="demo-helper-text-aligned"
<<<<<<< HEAD
          label="Property Address"
          onChange={(event) => {
            setCitrusProp({
              ...citrusProp,
              property_address: event.target.value,
            });
=======
          label="Street"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, street: event.target.value });
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
          }}
        />
      </Box>
      <br />
      <Box>
        <TextField
          helperText="Please enter property size"
          id="demo-helper-text-aligned"
<<<<<<< HEAD
          label="Property Size"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, property_size: event.target.value });
=======
          label="city"
          onChange={(event) => {
            setCitrusProp({ ...citrusProp, city: event.target.value });
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
          }}
        />
      </Box>
      <br />
<<<<<<< HEAD
      <Button
        className="create_button"
        variant="contained"
        color="primary"
        onClick={createProp}
      >
=======
      <Button className="create_button" variant="contained" color="primary" onClick={createProp}>
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
        Enter Order
      </Button>
    </div>
  );
}

export default CreateProp;
