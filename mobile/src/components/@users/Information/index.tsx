import {STYLES} from "./styles";
import {View} from "react-native";
import {UserModel} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {BarChart, FindakIsotype} from "src/svg";
import {useLang, useMoment, useTheme} from "src/hooks";
import {buildUserProgress} from "../Resume/build-user-progress";
import {
  BoxItems,
  Column,
  Guideline,
  ProgressBox,
  RowScrollable,
} from "src/components/@system";

interface InformationProps {
  user: UserModel;
}

export const Information: React.FC<InformationProps> = ({user}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {moment, dateFormat} = useMoment();
  const {createdAt, trades, offers, searches, first_name} = user;
  const progress = buildUserProgress({offers, searches, trades});

  return (
    <View style={STYLES["information"]}>
      <ComponentSeparator marginTop={15}>
        <BoxItems
          sectionUI={{marginVertical: 0}}
          items={[
            {
              border: false,
              icon: <FindakIsotype size={20} />,
              label: t("joined_to_findak_at"),
              value: moment(createdAt).format(dateFormat),
            },
          ]}
        />
      </ComponentSeparator>
      <Column marginTop={20}>
        <Guideline icon={<BarChart color={colors["WHITE_BLACK"]} />}>
          Estadísticas de {first_name}
        </Guideline>
        <RowScrollable fullWidth rowHeight={100}>
          {progress.map((progress, key) => (
            <ProgressBox progress={progress} key={key} />
          ))}
        </RowScrollable>
      </Column>
    </View>
  );
};
