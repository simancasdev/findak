import {STYLES} from "./styles";
import {View} from "react-native";
import {styleOS} from "src/styles";
import {TValue} from "src/languages";
import {ReportModel} from "src/interfaces";
import {useLang, useMoment} from "src/hooks";
import {Column, Row, Typography} from "src/components/@system";

interface ReportProps {
  report: ReportModel;
}

export const Report: React.FC<ReportProps> = ({report}) => {
  const {t} = useLang();
  const {moment, dateFormat} = useMoment();
  const {description, createdAt, reason} = report;

  return (
    <Row gap={15}>
      <View style={STYLES["indicator"]} />
      <Column style={[STYLES["report"], {flexShrink: 1}]}>
        <Typography fontSize={13}>
          {moment(createdAt).format(dateFormat)}
        </Typography>
        <Typography fontWeight={styleOS("500")}>
          {t(`help_me_${reason}` as TValue)}
        </Typography>
        <Typography fontSize={16}>{description}</Typography>
      </Column>
    </Row>
  );
};
