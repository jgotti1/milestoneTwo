import { useParams, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button, Container, FormControl, Select, InputLabel, MenuItem, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";

const EditProp = () => {
  const { id } = useParams();
  const { state } = useLocation();
  // console.log(state.city);
  const [prop, setProp] = useState(state.city);
  console.log(prop);
  return <div>EDIT PAGE</div>;
};

export default EditProp;
