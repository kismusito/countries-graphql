import { useNavigate } from "react-router-dom";

import ReactCountryFlag from "react-country-flag";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { Country } from "common/types/country.type";
import { Loading } from "views/ui/loading";
import { NoData } from "views/ui/no-data";

type Props = {
  countries: Country[];
  isLoading?: boolean;
};

export const CountryGrid = ({ countries, isLoading }: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleNavigate = (code: string): void => {
    if (code) {
      navigate(`/${code}`);
    }
  };

  if (countries.length === 0) {
    return <NoData />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grid container rowSpacing={2} columnSpacing={2} marginTop={2}>
      {countries?.map((country) => (
        <Grid item key={country.code}>
          <Chip
            label={country.name}
            onClick={() => handleNavigate(country.code)}
            avatar={<ReactCountryFlag countryCode={country?.code} svg />}
          />
        </Grid>
      ))}
    </Grid>
  );
};
