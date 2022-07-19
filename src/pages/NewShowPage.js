import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Grid } from "@mui/material";
// import { Container } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

const developmentURL = "http://localhost:5000/api/citrus";
const deploymentURL = "https://citrusproperty.herokuapp.com/api/citrus/";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const NewShowPage = () => {
  const [propList, setPropList] = useState([]);
<<<<<<< HEAD


  const handleRefresh = () => {
    axios.get(developmentURL).then((allProps) => {
      setPropList(allProps.data);
      console.log("refresh handled");
    });
  };

  const deleteProp = (id) => {
    axios.delete(`${developmentURL}${id}`);
    setTimeout(() => {
      console.log("refresh");
      handleRefresh();
    }, 100);
  };

  const editProp = (id) => {
    axios
      .patch(`${developmentURL}${id}`)
      .then(() => navigate("/editProp"))
      .catch((err) => console.log(err));
=======
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
>>>>>>> 86bb6b456b84d07e1931fec987fc1b30be3a3e07
  };

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(developmentURL)
=======
      .get(deploymentURL)
>>>>>>> 86bb6b456b84d07e1931fec987fc1b30be3a3e07
      .then((allProps) => {
        setPropList(allProps.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography variant="h2" textAlign={"center"} sx={{ mb: 3 }}>
        All Properties
      </Typography>
      {/* <Container sx={{ ml: 4, mr: 4 }}> */}
<<<<<<< HEAD
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          sx={{p: 1}}
          // columns={{ xs: '12', sm: "6", md: '4', lg: '3' }}
        >
          {propList.map((props, key) => (
            <Grid item xs={'12'} sm={'6'} md={''} lg={'3'}key={key}>
              <Card sx={{ maxWidth: 400 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: "secondary.green" }}
                      aria-label="recipe"
                    >
                      {props.state}
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        deleteProp(props._id);
                      }}
                    >
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  }
                  title={
                    <Typography variant="h5" color="secondary">
                      {props.city}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="h6"
                      color="secondary"
                    >{`${props.street}\n
                    Apt: ${props.apartmentNum}`}</Typography>
                  }
                />
                <CardContent>
                  <Typography variant="body1" color="secondary">
                    {`Occupied: ${props.occupied}`}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
=======
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        // columns={{ xs: '12', sm: "6", md: '4', lg: '3' }}
      >
        {propList.map((props, key) => (
          <Grid item xs={"12"} sm={"6"} md={""} lg={"3"} key={key}>
            <Card sx={{ maxWidth: 400 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "secondary.green" }} aria-label="recipe">
                    {props.state}
                  </Avatar>
                }
                action={
>>>>>>> 86bb6b456b84d07e1931fec987fc1b30be3a3e07
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteProp(props._id);
                    }}
                  >
                    <DeleteIcon color="secondary" />
                  </IconButton>
                }
                title={
                  <Typography variant="h5" color="secondary">
                    {props.city}
                  </Typography>
                }
                subheader={
                  <Typography variant="h6" color="secondary">{`${props.street}\n
                    Apt: ${props.apartmentNum}`}</Typography>
                }
              />
              <CardContent>
                <Typography variant="body1" color="secondary">
                  {`Occupied: ${props.occupied}`}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="edit"
                  onClick={() => {
                    navigate(`/EditProp/${props._id}`, { state: propList.filter((property) => property._id === props._id)[0] });
                    // editProp(props._id);
                    // console.log(props._id);
                  }}
                >
                  <EditIcon color="secondary" />
                </IconButton>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" color="secondary">
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{`Size: ${props.size}sq ft`}</Typography>
                  <Typography paragraph>{`Rent: $${props.rent}`}</Typography>
                  <Typography paragraph>{`Occupied Since: ${props.occupiedDate}`}</Typography>
                  <Typography paragraph>{`Tenant Name: ${props.tenantName}`}</Typography>
                  <Typography paragraph>{`Number of Occupants: ${props.numOccupants}`}</Typography>
                  <Typography paragraph>{`Pets: ${props.pets}`}</Typography>
                  <Typography paragraph>{`Late Rent Payment: ${props.latePayment}`}</Typography>
                  <Typography paragraph>{`Tenant Requests: ${props.tenantRequests}`}</Typography>
                  <Typography paragraph>{`Tenant Notes: ${props.tenantNotes}`}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* </Container> */}
    </>
  );
};

export default NewShowPage;
