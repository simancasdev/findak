import {Send} from "src/svg";
import {STYLES} from "./styles";
import {View} from "react-native";
import {PALETTE} from "src/styles";
import {Button} from "src/components/@system";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";
import {
  selectAuthState,
  askUserForProduct,
  selectProductState,
  ASK_USER_FOR_PRODUCT_LOADER,
} from "src/redux/slices";

interface ActionsProps {}

export const Actions: React.FC<ActionsProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {authUserId} = useAppSelector(selectAuthState);
  const {product} = useAppSelector(selectProductState);
  const {user_id, id} = product;

  return (
    <View style={STYLES["actions"]}>
      <Button
        label={t("i_am_interested")}
        style={STYLES["interested"]}
        labelColor={PALETTE["WHITE"]}
        loaderId={ASK_USER_FOR_PRODUCT_LOADER}
        icon={<Send color={PALETTE["WHITE"]} />}
        onPress={() => {
          dispatch(
            askUserForProduct({
              product_id: id,
              type: "product",
              receiver_id: user_id,
              sender_id: authUserId,
            })
          );
        }}
      />
    </View>
  );
};
