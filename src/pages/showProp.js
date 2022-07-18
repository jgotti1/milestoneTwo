import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, IconButton, Box } from "@mui/material";
import "./showProp.css";
import DeleteIcon from "@mui/icons-material/Delete";

import axios from "axios";

const developmentURL = "http://localhost:5000/api/citrus";
const deploymentURL = "https://citrusproperty.herokuapp.com/api/citrus/";

export default function ShowProps() {
  const navigate = useNavigate();
  const [propList, setPropList] = useState([]);
  const deleteProp = (id) => {
    axios.delete(`${deploymentURL}${id}`).then(() => history.push("/"));
  };

  useEffect(() => {
    axios
      .get(deploymentURL)
      .then((allProps) => {
        setPropList(allProps.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box textAlign="center" justifyContent="center" alignItems="center" minHeight="100vh">
      <Typography variant="h2" color="primary">
        All Properties
      </Typography>
      <TableContainer component={Paper} className="table">
        <Table className="table_list" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>State</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Street</TableCell>
              <TableCell align="right">Apartment Number</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Rent</TableCell>
              <TableCell align="right">Occupied</TableCell>
              <TableCell align="right">Occupied Date</TableCell>
              <TableCell align="right">Tenant Name</TableCell>
              <TableCell align="right">Number of Occupants</TableCell>
              <TableCell align="right">Pets</TableCell>
              <TableCell align="right">Late Payments</TableCell>
              <TableCell align="right">Tenant Requests</TableCell>
              <TableCell align="right">Tenant Notes</TableCell>
              <TableCell align="right">Delete Record</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propList.map((props, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {props.state}
                </TableCell>
                <TableCell align="right">{props.city}</TableCell>
                <TableCell align="right">{props.street}</TableCell>
                <TableCell align="right">{props.apartmentNum}</TableCell>
                <TableCell align="right">{props.size}</TableCell>
                <TableCell align="right">{props.rent}</TableCell>
                <TableCell align="right">{props.occupied}</TableCell>
                <TableCell align="right">{props.occupiedDate}</TableCell>
                <TableCell align="right">{props.tenantName}</TableCell>
                <TableCell align="right">{props.numOccupants}</TableCell>
                <TableCell align="right">{props.pets}</TableCell>
                <TableCell align="right">{props.latePayment}</TableCell>
                <TableCell align="right">{props.tenantRequests}</TableCell>
                <TableCell align="right">{props.tenantNotes}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteProp(props._id);
                    }}
                  >
                    <DeleteIcon color="Primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
