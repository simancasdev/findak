import {PaymentType} from "../models";

export interface SheetPaymentPayload {
  amount: number;
}

export interface PaymentPayload {
  user_id: any;
  amount: number;
  payment_type: PaymentType;
}
