import { useState } from "react";
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
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const developmentURL = "http://localhost:5000/api/citrus";
const deploymentURL = "https://citrusproperty.herokuapp.com/api/citrus/";

const PropCard = ({ props, handleRefresh, deleteProp, propList }) => {
  const navigate = useNavigate();

  // let date = {
  //   new Date(format(props.occupiedDate))
  // }

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

  const [expanded, setExpanded] = useState(false);
  console.log(props);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid
      item
      xs={"12"}
      sm={"6"}
      md={"3"}
      direction="row"
      alignItems="center"
      justifyContent="center"
  
    >
      <Card
        sx={{
          width: 400,
          border: 0.25,
          borderColor: "black",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "secondary.green" }} aria-label="recipe">
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
          title={<Typography variant="h5">{props.city}</Typography>}
          subheader={<Typography variant="h6">{props.street}</Typography>}
        />
        <CardContent>
          <Typography variant="body1">
            {`Occupied: ${props.occupied}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="edit"
            onClick={() => {
              navigate(`/EditProp/${props._id}`, {
                state: propList.filter(
                  (property) => property._id === props._id
                )[0],
              });
            }}
          >
            <EditIcon color="secondary" />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            color="secondary"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{`Size: ${props.size}sq ft`}</Typography>
            <Typography paragraph>{`Rent: $${props.rent}`}</Typography>
            <Typography
              paragraph
            >{`Occupied Since: ${props.occupiedDate}`}</Typography>
            <Typography
              paragraph
            >{`Tenant Name: ${props.tenantName}`}</Typography>
            <Typography
              paragraph
            >{`Number of Occupants: ${props.numOccupants}`}</Typography>
            <Typography paragraph>{`Pets: ${props.pets}`}</Typography>
            <Typography
              paragraph
            >{`Late Rent Payment: ${props.latePayment}`}</Typography>
            <Typography
              paragraph
            >{`Tenant Requests: ${props.tenantRequests}`}</Typography>
            <Typography
              paragraph
            >{`Tenant Notes: ${props.tenantNotes}`}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default PropCard;
