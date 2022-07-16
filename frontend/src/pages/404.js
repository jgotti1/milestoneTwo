import { Paper, Typography, Link } from "@mui/material"

const FourOhFour = () => {
  return (
    <Paper variant="outlined">
      <img src="../images/orange-slice.png" />
      <Typography>404 Error. Page Not Found</Typography>
      <Link to="/">Go Back Home</Link>
    </Paper>
  );
}
 
export default FourOhFour;