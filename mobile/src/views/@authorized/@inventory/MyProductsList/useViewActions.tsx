import {useCallback} from "react";
import {PALETTE, styleOS} from "src/styles";
import {ChevronDown, Edit, Eye, Trash} from "src/svg";
import {ProductModel, ViewParam} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {Options, Typography} from "src/components/@system";
import {useAppDispatch, useEffectWhenLeave, useLang, useTheme} from "src/hooks";
import {
  openSheet,
  closeSheet,
  openDialog,
  deleteProduct,
  DELETE_PRODUCT_LOADER,
} from "src/redux/slices";

export const useViewActions = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {navigate} =
    useNavigation<ViewParam<"ProductDetails" | "UploadProduct">>();

  useEffectWhenLeave(() => {
    dispatch(closeSheet());
  }, []);

  const openProductOptions = useCallback((product: ProductModel) => {
    const {id, title} = product;

    dispatch(
      openSheet({
        snapPoints: ["1%", "35%"],
        view: (
          <Options
            UIProps={{
              title: t("product_options"),
              icon: <ChevronDown color={colors["WHITE_BLACK"]} />,
              onPress: () => dispatch(closeSheet()),
            }}
            options={[
              {
                label: t("watch"),
                iconBoxColor: PALETTE["PRIMARY"],
                onPress: () => navigate("ProductDetails", {productId: id}),
                icon: (
                  <Eye
                    size={14}
                    strokeWidth={2}
                    color={colors["WHITE_BLACK"]}
                  />
                ),
              },
              {
                label: t("edit"),
                iconBoxColor: PALETTE["SECONDARY"],
                onPress: () => navigate("UploadProduct", {product}),
                icon: (
                  <Edit
                    size={14}
                    strokeWidth={3}
                    color={colors["WHITE_BLACK"]}
                  />
                ),
              },
              {
                label: t("delete"),
                iconBoxColor: PALETTE["ERROR"],
                icon: (
                  <Trash size={14} strokeWidth={3} color={PALETTE["WHITE"]} />
                ),
                onPress: () => {
                  dispatch(
                    openDialog({
                      view: (
                        <Typography
                          style={{
                            fontSize: 18,
                            textAlign: "center",
                            fontWeight: styleOS("500"),
                          }}
                        >
                          {t("are_you_sure_you_want_to_delete")} {title}?
                        </Typography>
                      ),
                      actions: [
                        {
                          type: "primary",
                          label: t("yes_delete"),
                          loaderColor: PALETTE["ERROR"],
                          loaderId: DELETE_PRODUCT_LOADER,
                          labelStyle: {color: PALETTE["ERROR"]},
                          style: {backgroundColor: colors["HOVER_LIGHT"]},
                          onPress: () => dispatch(deleteProduct(product["id"])),
                        },
                        {
                          label: t("no"),
                        },
                      ],
                    })
                  );
                },
              },
            ]}
          />
        ),
      })
    );
  }, []);

  return {openProductOptions};
};
