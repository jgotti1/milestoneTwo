import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {
  Button,
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
// import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const pointer = { cursor: "pointer" };

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/");
  //   }
  // }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //     navigate("/");
  //     console.log(localStorage.removeItem("token"))
  // };

  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <AppBar position="static" color="secondary" component="nav">
        <Toolbar>
          <Typography
            variant="h2"
            color="primary"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            <Link to="/">Citrus.</Link>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              fontFamily: "Poppins",
            }}
          >
            <Button className="link" size="large">
              <Link to="/showProp">All Properties</Link>
            </Button>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              fontFamily: "Poppins",
            }}
          >
            <Button className="link" size="large">
              <Link to="/addNewProp">Add New Property</Link>
            </Button>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              fontFamily: "Poppins",
            }}
          >
            <Button className="link" size="large">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </Button>
          </Typography>
          <IconButton sx={{ pointer }}>
            <LogoutIcon
              color="primary"
              className="link"
              variant="text"
              size="medium"
              end="end"
              onClick={handleLogout}
              sx={{ pointer }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;