import {api} from "src/services";
import {useLang} from "./useLang";
import {useCallback, useState} from "react";
import {useAppDispatch} from "./useAppDispatch";
import {showAlert, toggleButtonLoader} from "src/redux/slices";
import {ButtonLoaderId, StripeSheetConfig} from "src/interfaces";
import {BillingDetails, useStripe} from "@stripe/stripe-react-native";

type InitUsePayment = {
  amount: number;
  onError?: () => void;
  loaderId: ButtonLoaderId;
  billingDetails: BillingDetails;
  onPaymentSucceeded: () => void;
};

export const usePayment = ({
  amount,
  onError,
  loaderId,
  billingDetails,
  onPaymentSucceeded,
}: InitUsePayment) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const [sheetSetup, setSheetSetup] = useState<boolean>(false);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const getPaymentSheetConfig = useCallback(async () => {
    try {
      const data = await api.Post<StripeSheetConfig>("/payments/sheet/config", {
        amount,
      });
      return {...data};
    } catch (error) {
      dispatch(showAlert({type: "error", message: t("something_went_wrong")}));
    }
  }, []);

  const initializePaymentSheet = useCallback(async () => {
    try {
      dispatch(toggleButtonLoader(loaderId));
      const data = await getPaymentSheetConfig();
      if (data) {
        const {paymentIntent, ephemeralKey, customer} = data;
        const {error} = await initPaymentSheet({
          merchantDisplayName: "Example, Inc.",
          customerId: customer,
          customerEphemeralKeySecret: ephemeralKey,
          paymentIntentClientSecret: paymentIntent,
          defaultBillingDetails: {
            ...billingDetails,
          },
        });
        if (!error) setSheetSetup(true);
      }
    } catch (error) {
      dispatch(showAlert({type: "error", message: t("something_went_wrong")}));
    }
  }, []);

  const openPaymentSheet = useCallback(async () => {
    if (!sheetSetup) return;
    const {error} = await presentPaymentSheet();
    setSheetSetup(false);
    dispatch(toggleButtonLoader(loaderId));

    if (error) {
      dispatch(showAlert({type: "error", message: error.message}));
      if (onError) onError();
      return;
    }

    onPaymentSucceeded();
  }, [sheetSetup]);

  return {initializePaymentSheet, openPaymentSheet, sheetSetup};
};
