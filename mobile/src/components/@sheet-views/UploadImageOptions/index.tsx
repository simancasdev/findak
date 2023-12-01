import {useCallback} from "react";
import {PALETTE} from "src/styles";
import {Camera, Gallery} from "src/svg";
import {ComponentSeparator} from "src/hoc";
import {Asset} from "react-native-image-picker";
import {LaunchPickerType} from "src/interfaces";
import {Column, RowButton} from "../../@system";
import {useImagePicker, useLang} from "src/hooks";

interface UploadImageOptionsProps {
  onAssets: (assets: Asset[]) => void;
}

export const UploadImageOptions: React.FC<UploadImageOptionsProps> = ({
  onAssets,
}) => {
  const {t} = useLang();
  const {launch} = useImagePicker();

  const openPicker = useCallback(
    async (type: LaunchPickerType): Promise<void> => {
      const assets = await launch(type);
      if (assets) onAssets(assets);
    },
    []
  );

  return (
    <Column justifyContent="center">
      <ComponentSeparator marginBottom={0}>
        <RowButton
          iconBoxSize={35}
          label={t("take_photo")}
          onPress={() => openPicker("camera")}
          backgroundColor={PALETTE["TRANSPARENT"]}
          icon={<Camera color={PALETTE["WHITE"]} size={20} />}
        />
      </ComponentSeparator>
      <RowButton
        iconBoxSize={35}
        label={t("open_gallery")}
        onPress={() => openPicker("gallery")}
        backgroundColor={PALETTE["TRANSPARENT"]}
        icon={<Gallery color={PALETTE["WHITE"]} size={20} />}
      />
    </Column>
  );
};
