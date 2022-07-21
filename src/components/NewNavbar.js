import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";


const navigate = useNavigate();

const NewNavBar = () => {
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.reload();
  // };

  const handleLogout = async () => {
    await localStorage
      .removeItem("token")
      .then(() => navigate("/Login"))
      .catch((err) => console.log(err));
  };
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            sx={{ fontWeight: "bold", flexGrow: 1 }}
            color="primary"
            variant="h2"
            component="div"
          >
            Citrus.
          </Typography>
          <div style={(flexGrow = 1)}>
            <Button variant="text" size="large">
              <Link underline="none" to="/ShowProp">
                All Properties
              </Link>
            </Button>
            <Button variant="text" size="large">
              <Link underline="none" to="/AddNewProp">
                Add New Property
              </Link>
            </Button>
            <IconButton variant="text" size="large" onClick={handleLogout}>
              Logout
              <LogoutIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NewNavBar;
