import { Continent } from "common/types/continent.type";
import { Country } from "common/types/country.type";
import { Options } from "common/types/options.type";
import { DefaultResponse } from "./response.interface";

export interface GetCountriesResponse extends DefaultResponse {
  countries: Country[] | null;
  continents: Continent[];
  currencies: Options[];
}
