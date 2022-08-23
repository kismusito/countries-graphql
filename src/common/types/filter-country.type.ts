import { FilterInput } from "./filter.type";

export type FilterCountry = {
  name?: string | null;
  currency?: string | null;
  continent?: string | null;
};

export type FilterCountryQuery = {
  code?: FilterInput;
  continent?: FilterInput;
  currency?: FilterInput;
};
