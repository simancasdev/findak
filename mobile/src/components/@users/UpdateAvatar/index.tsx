import {STYLES} from "./styles";
import {Edit, User} from "src/svg";
import {PALETTE} from "src/styles";
import {Asset} from "react-native-image-picker";
import {UploadImageOptions} from "../../@sheet-views";
import {useCallback, useEffect, useState} from "react";
import {openSheet, selectAuthState} from "src/redux/slices";
import {useAppDispatch, useAppSelector, useTheme} from "src/hooks";
import {Container, IconBox, Touchable, Avatar} from "../../@system";
import {DEFAULT_SNAP_POINTS} from "src/redux/slices/bottom-sheet/helper";

interface UpdateAvatarProps {
  defaultUrl?: string;
  onPress?: () => void;
  onAvatarChange: (asset: Asset) => void;
}

export const UpdateAvatar: React.FC<UpdateAvatarProps> = ({
  onPress,
  defaultUrl,
  onAvatarChange,
}) => {
  const {colors} = useTheme();
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(selectAuthState);

  const onChangeAvatar = useCallback(() => {
    if (typeof onPress !== "undefined") onPress();
    dispatch(
      openSheet({
        snapPoints: DEFAULT_SNAP_POINTS["UPLOAD_IMAGE_OPTIONS"],
        view: (
          <UploadImageOptions
            onAssets={(asset) => {
              setAvatarUrl(asset[0].uri);
              onAvatarChange(asset[0]);
            }}
          />
        ),
      })
    );
  }, []);

  useEffect(() => {
    if (defaultUrl) setAvatarUrl(defaultUrl);
  }, [defaultUrl]);

  return (
    <Container style={[STYLES["update_avatar"]]}>
      {avatarUrl ? (
        <Avatar
          size={120}
          name={user["first_name"]}
          onPress={onChangeAvatar}
          src={avatarUrl!}
        />
      ) : (
        <Touchable style={STYLES["placeholder_box"]} onPress={onChangeAvatar}>
          <User size={50} color={colors["WHITE_BLACK"]} />
        </Touchable>
      )}

      <IconBox
        style={STYLES["box"]}
        onPress={onChangeAvatar}
        icon={<Edit size={18} color={PALETTE["WHITE"]} />}
      />
    </Container>
  );
};
