import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {styleOS} from "src/styles";
import {ChevronDown, ChevronUp} from "src/svg";
import {IconBox, Row, Touchable, Typography} from "src/components/@system";

interface HeaderProps {
  title: string;
  opened: boolean;
  onPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({title, onPress, opened}) => {
  const {colors} = useTheme();
  return (
    <Touchable onPress={onPress} style={[STYLES["header"]]}>
      <Row gap={10}>
        <IconBox
          size={30}
          onPress={onPress}
          icon={
            opened ? (
              <ChevronUp color={colors["WHITE_BLACK"]} />
            ) : (
              <ChevronDown color={colors["WHITE_BLACK"]} />
            )
          }
        />
        <Typography fontWeight={styleOS("500")}>{title}</Typography>
      </Row>
    </Touchable>
  );
};
