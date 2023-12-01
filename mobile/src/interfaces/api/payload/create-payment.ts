import {PaymentType} from "src/interfaces/models";

export type CreatePaymentPayload = {
  amount: number;
  payment_type: PaymentType;
  onSuccessCallback?: () => void;
};
