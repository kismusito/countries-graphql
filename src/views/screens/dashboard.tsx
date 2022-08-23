import { useSearchParams } from "react-router-dom";
import { useGetCountries } from "hooks/countries/useGetCountries";

import Container from "@mui/material/Container";
import { Filters } from "views/ui/filters";
import { CountryGrid } from "views/ui/country-grid";
import { Error } from "views/ui/error";

export const Dashboard = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const { countries, continents, currencies, isLoading, isError } =
    useGetCountries({
      name: searchParams.get("name"),
      continent: searchParams.get("continent"),
      currency: searchParams.get("currency"),
    });

  if (isError) return <Error error={isError} />;

  return (
    <Container>
      <Filters continents={continents} currencies={currencies} />

      <CountryGrid countries={countries || []} isLoading={isLoading} />
    </Container>
  );
};
