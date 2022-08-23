import { useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export const NoData = (): JSX.Element => {
  const [, setSearchParams] = useSearchParams();

  const handleResetFilters = (): void => {
    setSearchParams({});
  };

  return (
    <Grid marginTop={6} container alignItems="center" flexDirection="column">
      <p>No data to show</p>
      <Button variant="outlined" onClick={handleResetFilters}>
        Reset filters
      </Button>
    </Grid>
  );
};
