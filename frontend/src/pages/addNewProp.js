import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
// });

const AddNewProp = () => {
  // const classes = useStyles();
  const [newProp, setNewProp] = useState({
    state: "",
    city: "",
    street: "",
    apartmentNum: "",
    size: "",
    rent: "",
    occupied: false,
    tenantName: "",
    occupiedDate: Date,
    numOccupants: "",
    pets: false,
    latePayment: false,
    tenantRequests: "",
    tenantNotes: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/citrus", newProp).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <Container size="sm">
      <Typography variant="h2" color="textPrimary" component="h2" gutterBottom centered>
        Add a New Property
      </Typography>

      <Box>
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, state: e.target.value });
          }}
          label="State"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, city: e.target.value });
          }}
          label="City"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, street: e.target.value });
          }}
          label="Street Address"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, apartmentNum: e.target.value });
          }}
          label="Apartment #"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, size: e.target.value });
          }}
          label="Property Size (sq ft)"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, rent: e.target.value });
          }}
          label="Rent Amount ($)"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, occupied: e.target.value });
          }}
          label="Occupied"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        {/* <Checkbox
          checked= {setNewProp({...newProp, pets: true})}
          // onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        /> */}
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, tenantName: e.target.value });
          }}
          label="Tenant Name"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, occupiedDate: e.target.value });
          }}
          label="Occupied Since"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, numOccupants: e.target.value });
          }}
          label="Number of Occupants"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => {
            setNewProp({ ...newProp, pets: e.target.value });
          }}
          label="Pets?"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, latePayment: e.target.value });
          }}
          label="Late Payment?"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, tenantRequests: e.target.value });
          }}
          label="Tenant Requests"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />
        <TextField
          onChange={(e) => {
            setNewProp({ ...newProp, tenantNotes: e.target.value });
          }}
          label="Tenant Notes"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
        />

        <Button id="NewPropButton" onClick={handleSubmit} color="primary" margin="normal" variant="contained" textAlign="center" endIcon={<KeyboardArrowRightIcon />}>
          Submit New Property
        </Button>
      </Box>
    </Container>
  );
};

export default AddNewProp;
