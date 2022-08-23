import SelectComponent, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Options } from "common/types/options.type";

type Props = {
  options: Options[];
  placeholder?: string;
  value?: string | undefined;
  onChange?: (value: string) => void;
};

export const Select = ({
  options,
  value,
  onChange,
  placeholder,
}: Props): JSX.Element => {
  const handleChange = (event: SelectChangeEvent): void => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <SelectComponent
      onChange={(event) => handleChange(event)}
      value={value}
      displayEmpty
      fullWidth
    >
      {placeholder && <MenuItem value="">{placeholder}</MenuItem>}
      {options?.map((option) => (
        <MenuItem key={option?.key} value={option?.key}>
          {option?.value}
        </MenuItem>
      ))}
    </SelectComponent>
  );
};
