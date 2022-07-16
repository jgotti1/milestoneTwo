import { Paper, Typography, Button, Box } from "@mui/material"

const FourOhFour = () => {
  return (
    <Box textAlign="center">
      <Paper variant="outlined">
        <img src="../images/orange-slice.png" />
        <Typography variant="h2">
          404 Error. Page Not Found
        </Typography>
        <Button variant="contained" href="/Home">
          Go Back Home
        </Button>
      </Paper>
    </Box>
  );
}
 
export default FourOhFour;