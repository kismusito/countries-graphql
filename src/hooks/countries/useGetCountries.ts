import { gql, useQuery } from "@apollo/client";
import { GetCountriesResponse } from "common/interfaces/get-countries-response.interface";
import {
  FilterCountry,
  FilterCountryQuery,
} from "common/types/filter-country.type";
import { getCurrencies } from "utils/actions/get-countries";
import { Country } from "../../common/types/country.type";

const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      code
      currency
      emoji
    }
    continents {
      name
      code
    }
  }
`;

export const useGetCountries = ({
  name,
  continent,
  currency,
}: FilterCountry): GetCountriesResponse => {
  let filter: FilterCountryQuery = {};

  if (continent) {
    filter.continent = { eq: continent };
  }

  if (currency) {
    filter.currency = { eq: currency };
  }

  const {
    data,
    loading: isLoading,
    error: isError,
  } = useQuery(GET_COUNTRIES, {
    variables: { filter },
  });

  let countries: Country[] = data?.countries;

  if (name) {
    countries = countries?.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return {
    countries,
    continents: data?.continents,
    currencies: getCurrencies(data?.countries),
    isError,
    isLoading,
  };
};
