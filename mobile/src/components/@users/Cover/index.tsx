import {Fragment} from "react";
import {STYLES} from "./styles";
import {useLang} from "src/hooks";
import {PALETTE} from "src/styles";
import {Image, View} from "react-native";
import {Button} from "src/components/@system";
import {FindakIsotype, Gallery} from "src/svg";
import {useCoverUpdate} from "./useCoverUpdate";

interface CoverProps {
  defaultCoverUrl: string;
  editable?: boolean;
}

export const Cover: React.FC<CoverProps> = ({
  defaultCoverUrl,
  editable = false,
}) => {
  const {t} = useLang();
  const {handleChange, coverUrl} = useCoverUpdate(defaultCoverUrl);

  return (
    <View style={STYLES["header"]}>
      {coverUrl ? (
        <Fragment>
          <Image
            style={STYLES["cover_image"]}
            source={{
              uri: coverUrl,
            }}
          />
        </Fragment>
      ) : (
        <View style={STYLES["placeholder"]}>
          <FindakIsotype size={100} color={PALETTE["WHITE"]} />
        </View>
      )}
      <View style={STYLES["layer"]} />
      {editable && (
        <Button
          onPress={handleChange}
          label={t("change_cover")}
          labelColor={PALETTE["WHITE"]}
          style={STYLES["change_cover_button"]}
          icon={<Gallery color={PALETTE["WHITE"]} />}
        />
      )}
    </View>
  );
};
