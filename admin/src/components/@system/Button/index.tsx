import {Style} from "interfaces";
import {ButtonStyled} from "./styles";

interface ButtonProps extends Style {
  label: string;
  icon?: JSX.Element;
  disabled?: boolean;
  onClick: () => void;
  type?: "submit" | "button";
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  style,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <ButtonStyled
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label}
    </ButtonStyled>
  );
};
