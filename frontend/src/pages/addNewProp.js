import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: "block",
//   },
// });

const handleSubmit = (e) => {
  e.preventDefault();
};

const AddNewProp = () => {

  // const classes = useStyles();
  const [stateUS, setStateUS] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [size, setSize] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [occupied, setOccupied] = useState(false);
  const [tenantName, setTenantName] = useState("");
  const [occupiedDate, setOccupiedDate] = useState("");
  const [occupants, setOccupants] = useState("");
  // const [latePayment, setLatePayment] = useState("");
  // const [tenantRequests, setTenantRequests] = useState("");
  // const [tenantNotes, setTenantNotes] = useState("");

  return (
    <Container size="sm">
      <Typography
        variant="h2"
        color="textPrimary"
        component="h2"
        gutterBottom
        centered
      >
        Add a New Property
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          // className={classes.field}
          onChange={(e) => setStateUS(e.target.value)}
          label="State"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setCity(e.target.value)}
          label="City"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setStreet(e.target.value)}
          label="Street Address"
          variant="outlined"
          color="primary"
          margin="dense"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setApt(e.target.value)}
          label="Apartment #"
          variant="outlined"
          color="primary"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setSize(e.target.value)}
          label="Property Size (sq ft)"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setRentAmount(e.target.value)}
          label="Rent Amount ($)"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />

        <TextField
          // className={classes.field}
          onChange={(e) => setOccupied(e.target.value)}
          label="Occupied"
          variant="outlined"
          color="primary"
          fullWidth
          required
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setTenantName(e.target.value)}
          label="Tenant Name"
          variant="outlined"
          color="primary"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setOccupiedDate(e.target.value)}
          label="Occupied Since"
          variant="outlined"
          color="primary"
          fullWidth
        />
        <TextField
          // className={classes.field}
          onChange={(e) => setOccupants(e.target.value)}
          label="Number of Occupants"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          variant="outlined"
          color="primary"
          fullWidth
        />
        {/* <TextField
          onChange={(e) => setLatePayment(e.target.value)}
          label="Late Payment?"
          variant="outlined"
          color="primary"
          fullWidth
        />
        <TextField
          onChange={(e) => setTenantRequests(e.target.value)}
          label="Tenant Requests"
          variant="outlined"
          color="primary"
          fullWidth
        />
        <TextField
          onChange={(e) => setTenantNotes(e.target.value)}
          label="Tenant Notes"
          variant="outlined"
          color="primary"
          fullWidth
        /> */}

        <Button
          type="submit"
          color="primary"
          margin="normal"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit New Property
        </Button>
      </form>
    </Container>
  );
};

export default AddNewProp;
