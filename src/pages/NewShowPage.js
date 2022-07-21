import { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
// import { Container } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import PropCard from "../components/PropCard";

const developmentURL = "http://localhost:5000/api/citrus";
const deploymentURL = "https://citrusproperty.herokuapp.com/api/citrus/";


const NewShowPage = () => {
  const [propList, setPropList] = useState([]);
  const navigate = useNavigate();
  const handleRefresh = () => {
    axios.get(deploymentURL).then((allProps) => {
      setPropList(allProps.data);
    });
  };

  const deleteProp = (id) => {
    axios.delete(`${deploymentURL}${id}`);
    setTimeout(() => {
      console.log("refresh");
      handleRefresh();
    }, 1200);
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
    <>
      <Typography variant="h2" textAlign={"center"} sx={{ mb: 3 }}>
        All Purchased Properties
      </Typography>
      {/* <Container sx={{ ml: 4, mr: 4 }}> */}

      <Grid
        container
        sx={{px: 3, display: "flex", justifyContent: "center"}}
        alignItems="center"
        spacing={{ xs: 1, md: 4 }}
        columns={{ xs: "auto", sm: "auto", md: "auto", lg: "auto" }}
      >
        {propList.map((props, i) => (
          <PropCard
            props={props}
            key={i}
            handleRefresh={handleRefresh}
            deleteProp={deleteProp}
            propList={propList}
          />
        ))}
      </Grid>
    </>
  );
};

export default NewShowPage;
