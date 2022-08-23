import { useGetCountry } from "hooks/countries/useGetCountry";
import { useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ReactCountryFlag from "react-country-flag";
import { WrapperCentered } from "views/styled/wrapper/wrapper-centered";
import { ReturnButton } from "views/ui/buttons/return";

export const CountryDetail = (): JSX.Element => {
  const { code } = useParams();
  const { country, isLoading, isError } = useGetCountry(code);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{isError.message}</p>;
  if (!country) return <p>Not found</p>;

  return (
    <Container>
      <ReturnButton />

      <WrapperCentered>
        <h1>{country?.name}</h1>
        <ReactCountryFlag
          countryCode={country.code}
          svg
          style={{ width: 40, height: 40, marginLeft: 10 }}
        />
      </WrapperCentered>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Continent</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Capital</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th">{country.code}</TableCell>
              <TableCell>{country.name}</TableCell>
              <TableCell>{country.currency}</TableCell>
              <TableCell>{country.continent.name}</TableCell>
              <TableCell>
                <Grid container columnSpacing={2} rowSpacing={2}>
                  {country.languages.map((language) => (
                    <Grid item key={language.code}>
                      <Chip size="small" label={language.name} />
                    </Grid>
                  ))}
                </Grid>
              </TableCell>
              <TableCell>{country.capital}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
