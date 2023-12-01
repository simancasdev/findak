import {Check} from "src/svg";
import {PALETTE} from "src/styles";
import {Asset} from "react-native-image-picker";
import {UploadImageOptions} from "src/components/@sheet-views";
import {useAppDispatch, useFirebaseStorage, useLang} from "src/hooks";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {DEFAULT_SNAP_POINTS} from "src/redux/slices/bottom-sheet/helper";
import {
  syncUser,
  openSheet,
  showAlert,
  openDialog,
  closeSheet,
  updateUser,
  closeDialog,
  showScreenLoader,
} from "src/redux/slices";

export const useCoverUpdate = (defaultCoverUrl: string) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const [asset, setAsset] = useState<Asset>();
  const [execute, setExecute] = useState<boolean>(false);
  const [coverUrl, setCoverUrl] = useState<string>(defaultCoverUrl);

  const {uploadPhotos} = useFirebaseStorage();
  const update = useCallback(async () => {
    dispatch(closeDialog());
    dispatch(showScreenLoader({show: true, message: "updating_cover"}));

    const cover_url = (
      await uploadPhotos([asset] as Asset[], "photos/covers", false)
    )[0] as string;

    dispatch(
      updateUser({
        user: {cover_url},
        callback: () => {
          setExecute(false);
          dispatch(showScreenLoader({show: false}));
          dispatch(syncUser());
          dispatch(
            showAlert({
              type: "success",
              message: "your_cover_has_been_updated",
            })
          );
        },
      })
    );
  }, [asset]);

  const handleChange = useCallback(() => {
    setCoverUrl(defaultCoverUrl);
    dispatch(closeDialog());
    dispatch(
      openSheet({
        snapPoints: DEFAULT_SNAP_POINTS["UPDATE_HEADER_COVER"],
        view: (
          <UploadImageOptions
            onAssets={(asset) => {
              setCoverUrl(asset[0].uri as string);
              setAsset(asset[0]);
              dispatch(closeSheet());
              dispatch(
                openDialog({
                  actions: [
                    {
                      type: "primary",
                      label: t("update"),
                      onPress: () => setExecute(true),
                      icon: <Check color={PALETTE["WHITE"]} />,
                    },
                    {
                      label: t("choose_another"),
                      onPress: handleChange,
                    },
                    {
                      label: t("cancel"),
                      onPress: () => {
                        setCoverUrl(defaultCoverUrl);
                        dispatch(closeDialog());
                      },
                    },
                  ],
                })
              );
            }}
          />
        ),
      })
    );
  }, [coverUrl]);

  useLayoutEffect(() => {
    if (defaultCoverUrl) setCoverUrl(defaultCoverUrl);
  }, [defaultCoverUrl]);

  useEffect(() => {
    if (execute) update();
  }, [execute]);

  return {handleChange, coverUrl};
};
