import {PALETTE} from "styles";
import {Style} from "interfaces";
import {Typography} from "../Typography";
import {FieldSelect, SelectStyled, Option} from "./styles";

interface SelectProps extends Style {
  name: string;
  label?: string;
  error?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: {label: string; value: string | number}[];
}

export const Select: React.FC<SelectProps> = ({
  name,
  error,
  style,
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <SelectStyled style={style}>
      {label && <Typography>{label}</Typography>}
      <FieldSelect name={name} value={value} onChange={onChange}>
        {options.map(({label, value}, key) => (
          <Option value={value} key={key}>
            {label}
          </Option>
        ))}
      </FieldSelect>
      {error && <Typography color={PALETTE["ERROR"]}>{error}</Typography>}
    </SelectStyled>
  );
};
