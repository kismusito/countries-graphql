import type { ApolloError } from "@apollo/client";

export interface DefaultResponse {
  isLoading: boolean;
  isError: ApolloError | undefined;
}
