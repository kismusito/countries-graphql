import Grid from "@mui/material/Grid";
import type { ApolloError } from "@apollo/client";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type Props = {
  error: ApolloError;
};

export const Error = ({ error }: Props): JSX.Element => {
  return (
    <Grid marginTop={6} container alignItems="center" flexDirection="column">
      <ErrorOutlineIcon color="error" fontSize="large" />
      <p>{error.message}</p>
    </Grid>
  );
};
