import * as Yup from "yup";
import {Form} from "./Form";
import {Formik} from "formik";
import {useMemo} from "react";
import {STYLES} from "./styles";
import {ChevronDown} from "src/svg";
import {useAction} from "./useAction";
import {SearchModel} from "src/interfaces";
import {SendOfferContext} from "./context";
import {PALETTE, styleOS} from "src/styles";
import {Keyboard, View} from "react-native";
import {SearchPreview} from "src/components/@searches";
import {Divider, Guideline, TopBar} from "../../@system";
import {useLang, useTheme, useAppDispatch} from "src/hooks";
import {initialValues, sendOfferSchema} from "./form.schema";
import {closeSheet, SEND_OFFER_LOADER} from "src/redux/slices";

interface SendOfferProps {
  search: SearchModel;
}

export const SendOffer: React.FC<SendOfferProps> = ({search}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {onSubmit} = useAction();
  const dispatch = useAppDispatch();
  const {user, budget} = search;

  const values = useMemo(() => ({search}), [search]);

  return (
    <Formik
      validationSchema={sendOfferSchema.concat(
        Yup.object().shape({
          // prettier-ignore
          price: Yup.number()
            .required("validation_this_field_is_required")
            .min(0.1, `${t("price_must_be_greater_than_or_equal_to")} $0.1`)
            .max(search["accept_prices_higher_than_my_budget"] ? 999999 : search["budget"],
              `${user["first_name"]} ${t("is_not_allowing_prices_greater_than")} $${budget}`),
        })
      )}
      onSubmit={(values, helpers) => onSubmit(values, helpers)}
      initialValues={{
        ...initialValues,
        search_id: search["id"],
        receiver_id: search["user"]["id"],
      }}
    >
      {({handleSubmit, dirty, isValid}) => (
        <SendOfferContext.Provider value={values}>
          <View style={STYLES["send_offer"]}>
            <TopBar
              style={{marginTop: 0}}
              back={{
                icon: <ChevronDown color={colors["WHITE_BLACK"]} />,
                label: t("send_offer"),
                onPress: () => {
                  dispatch(closeSheet());
                  Keyboard.dismiss();
                },
              }}
              action={{
                label: t("send"),
                onPress: handleSubmit,
                loaderId: SEND_OFFER_LOADER,
                loaderColor: PALETTE["WHITE"],
                disabled: !(dirty && isValid),
              }}
            />
            <Form />
            <Divider />
            <Guideline
              marginBottom={10}
              labelStyle={{fontWeight: styleOS("500")}}
            >
              {t("search_preview")}
            </Guideline>
            <SearchPreview
              descriptionNumeberOfLines={3}
              avatarRedirection={false}
              search={search}
            />
          </View>
        </SendOfferContext.Provider>
      )}
    </Formik>
  );
};
