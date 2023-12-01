import {Row} from "../Row";
import {BadgeStyled} from "./styles";
import {PALETTE} from "@/styles/palette";

interface BadgeProps {
  label: string;
  color?: string;
  icon?: JSX.Element;
  backgroundColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  icon,
  label,
  color = PALETTE["WHITE"],
  backgroundColor = PALETTE["PRIMARY"],
}) => {
  return (
    <BadgeStyled style={{backgroundColor, color}}>
      <Row gap={10}>
        {icon} {label}
      </Row>
    </BadgeStyled>
  );
};
