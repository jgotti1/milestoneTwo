import { Typography, Button, Box } from "@mui/material"

const FourOhFour = () => {
  return (
    <Box textAlign="center">
        <img src="../images/orange-slice.png" />
        <Typography 
          variant="h2"
          sx={{mb:3}}>
          404 Error. Page Not Found
        </Typography>
        <Button variant="contained" href="/">
          Go Back Home
        </Button>
    </Box>
  );
}
 
export default FourOhFour;