import { Country } from "./country.type";

export type State = {
  code?: string;
  name: string;
  country: Country;
};
