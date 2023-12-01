import {STYLES} from "./styles";
import {useEffect} from "react";
import {Crown, CheckCircle} from "src/svg";
import {PALETTE, styleOS} from "src/styles";
import {FINDAK_VARIABLES} from "src/constants";
import {becomePremium, createPayment} from "src/redux/thunks";
import {PREMIUM_LOADER, selectAuthState} from "src/redux/slices";
import {Button, Column, Row, Typography} from "src/components/@system";
import {
  useLang,
  useTheme,
  usePayment,
  useAppDispatch,
  useAppSelector,
} from "src/hooks";

interface PaymentProps {}

export const Payment: React.FC<PaymentProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {first_name, last_name} = useAppSelector(selectAuthState)["user"];
  const {price, priceLabel} = FINDAK_VARIABLES["PREMIUM"];

  const {initializePaymentSheet, openPaymentSheet, sheetSetup} = usePayment({
    amount: price,
    loaderId: PREMIUM_LOADER,
    billingDetails: {name: `${first_name} ${last_name}`},
    onPaymentSucceeded: () => {
      dispatch(
        createPayment({
          amount: price,
          payment_type: "premium",
          onSuccessCallback: () => {
            dispatch(becomePremium());
          },
        })
      );
    },
  });

  useEffect(() => {
    if (sheetSetup) openPaymentSheet();
  }, [sheetSetup]);

  return (
    <Column alignItems="center" gap={25} style={STYLES["buy_section"]}>
      <Row gap={10}>
        <CheckCircle color={colors["WHITE_BLACK"]} />
        <Typography fontWeight={styleOS("500")}>
          {t("be_part_of_the")} 1.437 {t("premium_users")}
        </Typography>
      </Row>
      <Column alignItems="center" style={{width: "100%"}}>
        <Button
          loaderId={PREMIUM_LOADER}
          icon={<Crown size={20} />}
          style={STYLES["buy_button"]}
          labelColor={PALETTE["WHITE"]}
          loaderColor={PALETTE["WHITE"]}
          label={`$${priceLabel} / ${t("month")}`}
          onPress={() => initializePaymentSheet()}
        />
        <Typography fontSize={12}>
          {t("start_your_premium_experience_today")}
        </Typography>
      </Column>
    </Column>
  );
};
