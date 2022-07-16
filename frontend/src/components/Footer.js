import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';


const Footer = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                bottom="0"
                color="primary"
                style={{ position: "fixed", bottom: 0, marginTop: "35px" }}>
                <Toolbar>
                    <Typography variant="caption" component="div" sx={{ flexGrow: 1 }} color="secondary" >
                        Citrus Property Management &copy; {new Date().getFullYear()}
                    </Typography>
                    <IconButton href="https://github.com/NJITGeekSquad/milestoneTwo">
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Footer;