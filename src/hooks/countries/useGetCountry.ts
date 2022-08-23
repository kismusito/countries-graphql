import { gql, useQuery } from "@apollo/client";
import { GetCountryResponse } from "common/interfaces/get-country-response.interface";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      capital
    }
  }
`;

export const useGetCountry = (code: string | undefined): GetCountryResponse => {
  const {
    data,
    loading: isLoading,
    error: isError,
  } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  return {
    country: data?.country,
    isLoading,
    isError,
  };
};
