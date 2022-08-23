import { Country } from "./country.type";

export type Continent = {
  code: string;
  name: string;
  countries: Country[];
};
