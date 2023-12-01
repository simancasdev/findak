import {X} from "src/svg";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {Row, IconBox, Column, Typography} from "src/components/@system";
import {closeMultimedia, selectMultimediaState} from "src/redux/slices";

interface ToolbarProps {}

export const Toolbar: React.FC<ToolbarProps> = () => {
  const dispatch = useAppDispatch();
  const {UIProps} = useAppSelector(selectMultimediaState);

  return (
    <Row justifyContent="space-between" style={STYLES["toolbar"]}>
      <Row gap={15}>
        <IconBox
          size={45}
          icon={<X color={PALETTE["WHITE"]} />}
          onPress={() => dispatch(closeMultimedia())}
          style={{
            borderRadius: 100,
            backgroundColor: PALETTE["WHITE01"],
          }}
        />
        {typeof UIProps !== "undefined" && (
          <Column gap={0}>
            <Typography style={STYLES["title"]}>{UIProps["title"]}</Typography>
            {UIProps["helperText"] && (
              <Typography style={STYLES["helper_text"]} fontSize={12}>
                {UIProps["helperText"]}
              </Typography>
            )}
          </Column>
        )}
      </Row>
    </Row>
  );
};
