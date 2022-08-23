import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { client } from "common/apollo-client";

import { GlobalStyle } from "common/theme/global-style";

import { Dashboard } from "views/screens/dashboard";
import { CountryDetail } from "views/screens/detail";
import { NotFound } from "views/screens/not-found";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:code" element={<CountryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};
