import {STYLES} from "./styles";
import {Gallery, X} from "src/svg";
import {PALETTE} from "src/styles";
import {Image, View} from "react-native";
import {useEffect, useState} from "react";
import {Asset} from "react-native-image-picker";
import {UploadImageOptions} from "../../@sheet-views";
import {BottomSheetLayer, Style} from "src/interfaces";
import {useAppDispatch, useLang, useTheme} from "src/hooks";
import {RowScrollable, Touchable, Typography} from "../../@system";
import {DEFAULT_SNAP_POINTS} from "src/redux/slices/bottom-sheet/helper";
import {
  openSheet,
  showAlert,
  closeSheet,
  openMultimedia,
} from "src/redux/slices";

const MAX_REFERENCES = 3;

interface UploaderProps extends Style {
  guideline?: string;
  defaultValue?: (Asset | string)[];
  sheetLayer?: BottomSheetLayer;
  onAssetsChange: (assets: Asset[]) => void;
}

export const Uploader: React.FC<UploaderProps> = ({
  style,
  guideline,
  defaultValue,
  onAssetsChange,
  sheetLayer = "optional",
}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const [assets, setAssets] = useState<(Asset | string)[]>(defaultValue ?? []);

  useEffect(() => {
    onAssetsChange(assets as Asset[]);
  }, [assets]);

  return (
    <View style={[STYLES["uploader"], style]}>
      {guideline && <Typography marginBottom={5}>{guideline}</Typography>}
      <RowScrollable fullWidth rowHeight={80}>
        <Touchable
          style={[STYLES["asset"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          onPress={() => {
            dispatch(
              openSheet({
                layer: sheetLayer,
                snapPoints: DEFAULT_SNAP_POINTS["UPLOAD_IMAGE_OPTIONS"],
                enablePanDownToClose: true,
                view: (
                  <UploadImageOptions
                    onAssets={(assetsSelected) => {
                      setAssets((prev) => {
                        if (prev.length + 1 > MAX_REFERENCES) {
                          dispatch(closeSheet("optional"));
                          dispatch(
                            showAlert({
                              type: "error",
                              translate: false,
                              message: `${t(
                                "you_cannot_upload_more_than"
                              )} ${MAX_REFERENCES} ${t("images")}`,
                            })
                          );
                          return prev;
                        }
                        return [...prev, ...assetsSelected];
                      });
                    }}
                  />
                ),
              })
            );
          }}
        >
          <Gallery color={colors["WHITE_BLACK"]} />
        </Touchable>
        {assets.map((asset, key) => {
          // prettier-ignore
          const uri: Asset | string | undefined = typeof asset === "string" ? asset : asset["uri"];
          // prettier-ignore
          const sources = typeof asset === "string"
              ? (assets as string[])
              : (assets.map((asset) => (asset as Asset).uri) as string[]);

          return (
            <Touchable
              key={key}
              style={STYLES["preview"]}
              onPress={() => {
                dispatch(
                  openMultimedia({
                    sources,
                    initialSource: uri,
                    UIProps: {
                      title: t("preview"),
                    },
                  })
                );
              }}
            >
              <Image source={{uri}} style={STYLES["preview_image"]} />
              <Touchable
                style={STYLES["delete_button"]}
                onPress={() =>
                  setAssets((prevAssets) =>
                    prevAssets.filter((prevAsset) =>
                      typeof prevAsset === "string"
                        ? prevAsset !== uri
                        : prevAsset["uri"] !== uri
                    )
                  )
                }
              >
                <X size={15} color={PALETTE["WHITE"]} strokeWidth={3} />
              </Touchable>
            </Touchable>
          );
        })}
      </RowScrollable>
    </View>
  );
};
