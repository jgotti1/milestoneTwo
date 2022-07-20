import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button, IconButton, Box, AppBar, Toolbar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
// import { useEffect } from "react";





const Navbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
    window.location.reload();
  };

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
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <div className="logo">
            <Link to="/">Citrus.</Link>
          </div>
          <nav className="item">
            <ul className="ul">
              <li>
                <Button className="link" variant="text" size="large" edge="end">
                  <Link to="/showProp">All Properties</Link>
                </Button>
              </li>
              <li>
                <Button className="link" variant="text" size="large" edge="end">
                  <Link to="/addNewProp">Add New Property</Link>
                </Button>
              </li>
              <li>
                <IconButton
                  className="link"
                  variant="text"
                  size="large"
                  edge="end"
                  onClick={handleLogout}
                >
                  <LogoutIcon />
                </IconButton>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
