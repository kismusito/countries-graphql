import { Country } from "common/types/country.type";
import { DefaultResponse } from "./response.interface";

export interface GetCountryResponse extends DefaultResponse {
  country: Country | null;
}
