import { useSearchParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Select } from "views/ui/select";
import { arrayToSelectOptions } from "utils/actions/array-to-select-options";
import TextField from "@mui/material/TextField";
import { Continent } from "common/types/continent.type";
import { Options } from "common/types/options.type";

type Params = {
  [key: string]: string;
};

type Props = {
  continents: Continent[];
  currencies: Options[];
};

export const Filters = ({ continents, currencies }: Props): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (key: string, value: string) => {
    const prevParams: Params = {};
    searchParams.forEach((item, key) => {
      prevParams[key] = item;
    });
    setSearchParams({ ...prevParams, [key]: value });
  };

  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      <Grid item md={6} xs={12}>
        <TextField
          type="text"
          fullWidth
          defaultValue={searchParams.get("name") || ""}
          placeholder="Search country"
          onChange={({ target }) => handleSearch("name", target.value)}
        />
      </Grid>

      <Grid item md={3} xs={12}>
        <Select
          onChange={(value) => handleSearch("continent", value)}
          value={searchParams.get("continent") || ""}
          placeholder="Select continent"
          options={arrayToSelectOptions({
            items: continents,
            keyToSearch: "code",
            valueToSearch: "name",
          })}
        />
      </Grid>

      <Grid item md={3} xs={12}>
        <Select
          onChange={(value) => handleSearch("currency", value)}
          value={searchParams.get("currency") || ""}
          placeholder="Select currency"
          options={currencies}
        />
      </Grid>
    </Grid>
  );
};
