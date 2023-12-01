import {BaseModel, PaymentType} from ".";

export interface PaymentModel extends BaseModel {
  amount: number;
  user_id: string;
  type: PaymentType;
}
