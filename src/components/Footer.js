import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 15 }}>
      <AppBar
        position="static"
        bottom="0"
        color="primary"
        style={{ position: "fixed", bottom: 0, zIndex: 1100 }}
      >
        <Toolbar>
          <Typography
            variant="caption"
            component="div"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            Citrus Property Management &copy; {new Date().getFullYear()}
          </Typography>
          <IconButton href="https://github.com/NJITGeekSquad/milestoneTwo">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  );
};

export default Footer;
