import { Country } from "common/types/country.type";
import { Options } from "common/types/options.type";

export const getCurrencies = (countries: Country[]) => {
  const currencies: Options[] = [];
  countries?.forEach((country) => {
    if (!currencies.find((item) => item.key === country.currency)) {
      if (country.currency) {
        currencies.push({
          key: country.currency,
          value: country.currency,
        });
      }
    }
  });
  return currencies;
};
