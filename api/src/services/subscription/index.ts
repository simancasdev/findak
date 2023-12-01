import moment from "moment";
import {AbstractService, PaymentService, UserService} from "..";
import {SubscriptionModel, SubscriptionSchema} from "../../models";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";
import {
  IError,
  SubscriptionDoc,
  SubscriptionAttrs,
  BecomePremiumPayload,
} from "../../interfaces";

class SubscriptionService extends AbstractService<
  SubscriptionAttrs,
  SubscriptionDoc,
  SubscriptionModel
> {
  constructor() {
    super("Subscription", SubscriptionSchema);
  }

  public async becomePremium({user_id}: BecomePremiumPayload) {
    try {
      const payment = await PaymentService.getOne({user_id});

      if (!payment) {
        throw new BadRequestError(
          BAD_REQUEST_MESSAGES[
            "YOU_NEED_TO_PAY_A_SUBSCRIPTION_TO_BECOME_PREMIUM"
          ]
        );
      }

      const subscription = await this.save({
        user_id,
        expired: false,
        expireAt: moment().add("month", 1),
      });

      const user = await UserService.getById(user_id);
      user.subscription_id = subscription._id;
      await UserService.update(user_id, user);

      return subscription;
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new SubscriptionService();
export {service as SubscriptionService};
