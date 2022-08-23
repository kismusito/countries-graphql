import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = (): JSX.Element => {
  return (
    <Grid marginTop={6} container alignItems="center" flexDirection="column">
      <CircularProgress />
      <p>Loading data...</p>
    </Grid>
  );
};
