import {STYLES} from "./styles";
import {Row} from "../../@system";
import {SearchRounded} from "src/svg";
import {useLang, useTheme} from "src/hooks";
import {StyleProp, TextInput, TextInputProps, ViewStyle} from "react-native";

interface SearchBarProps extends TextInputProps {
  onSearch: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {onSearch, containerStyle} = props;

  return (
    <Row
      gap={8}
      style={[
        STYLES["search_bar"],
        {
          backgroundColor: colors["SEARCH_BAR"],
        },
        containerStyle,
      ]}
    >
      <SearchRounded size={18} strokeWidth={2} color={colors["WHITE_BLACK"]} />
      <TextInput
        returnKeyType="search"
        style={[STYLES["input"], {color: colors["WHITE_BLACK"]}]}
        placeholder={t("find_what_interests_you")}
        placeholderTextColor={colors["INPUT_PLACEHOLDER"]}
        onSubmitEditing={(event) => {
          onSearch(event.nativeEvent.text);
        }}
        {...props}
      />
    </Row>
  );
};
