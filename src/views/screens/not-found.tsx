import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = (): void => {
    navigate("/");
  };

  return (
    <Container>
      <p>Page not found</p>
      <Button variant="outlined" onClick={handleNavigate}>
        Go back
      </Button>
    </Container>
  );
};
