import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { ArrowBack } from "@mui/icons-material";

export const ReturnButton = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBack = (): void => {
    navigate(-1);
  };

  return (
    <Button variant="text" startIcon={<ArrowBack />} onClick={handleBack}>
      Return
    </Button>
  );
};
