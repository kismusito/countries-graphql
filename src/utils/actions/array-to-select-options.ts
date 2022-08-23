import { Options } from "common/types/options.type";

type Props = {
  items: any[];
  keyToSearch: string;
  valueToSearch: string;
};

export const arrayToSelectOptions = ({
  items,
  keyToSearch,
  valueToSearch,
}: Props) => {
  const options: Options[] = [];

  items?.forEach((item) => {
    options.push({ key: item[keyToSearch], value: item[valueToSearch] });
  });

  return options;
};
