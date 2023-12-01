import {AbstractService} from "..";
import env from "../../configuration/env";
import {BadRequestError} from "../../errors";
import {PaymentModel, PaymentSchema} from "../../models";
import {
  IError,
  PaymentAttrs,
  PaymentDoc,
  PaymentPayload,
  SheetPaymentPayload,
} from "../../interfaces";

const stripe = require("stripe")(env.STRIPE_SECRET_KEY);

class PaymentService extends AbstractService<
  PaymentAttrs,
  PaymentDoc,
  PaymentModel
> {
  constructor() {
    super("Payment", PaymentSchema);
  }

  public async create({
    amount,
    user_id,
    payment_type,
  }: PaymentPayload): Promise<PaymentDoc | undefined> {
    try {
      return await this.save({user_id, type: payment_type, amount});
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async sheetConfig({amount}: SheetPaymentPayload) {
    try {
      const customer = await stripe.customers.create();
      const ephemeralKey = await stripe.ephemeralKeys.create(
        {customer: customer.id},
        {apiVersion: "2022-11-15"}
      );

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        customer: customer.id,
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        customer: customer.id,
        ephemeralKey: ephemeralKey.secret,
        paymentIntent: paymentIntent.client_secret,
        publishableKey: env.STRIPE_PUBLISHABLE_KEY,
      };
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new PaymentService();
export {service as PaymentService};
