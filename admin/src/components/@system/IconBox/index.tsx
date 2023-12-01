import {Style} from "interfaces";
import {IconBoxStyled} from "./styles";

interface IconBoxProps extends Style {
  size?: number;
  icon: JSX.Element;
  onClick: () => void;
  backgroundColor?: string;
}

export const IconBox: React.FC<IconBoxProps> = ({
  icon,
  style,
  onClick,
  size = 30,
  backgroundColor,
}) => {
  return (
    <IconBoxStyled
      onClick={onClick}
      style={{...style, width: size, height: size, backgroundColor}}
    >
      {icon}
    </IconBoxStyled>
  );
};
