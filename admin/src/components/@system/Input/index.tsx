import {PALETTE} from "styles";
import {Style} from "interfaces";
import {Typography} from "../Typography";
import {HTMLInputTypeAttribute} from "react";
import {FieldInput, InputStyled} from "./styles";

interface InputProps extends Style {
  name: string;
  label?: string;
  error?: string;
  autoFocus?: boolean;
  placeholder?: string;
  value: string | number;
  type?: HTMLInputTypeAttribute;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = ({
  name,
  style,
  label,
  value,
  error,
  onChange,
  placeholder,
  type = "text",
  autoFocus = false,
}) => {
  return (
    <InputStyled style={style}>
      {label && <Typography>{label}</Typography>}
      <FieldInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
      {error && <Typography color={PALETTE["ERROR"]}>{error}</Typography>}
    </InputStyled>
  );
};
