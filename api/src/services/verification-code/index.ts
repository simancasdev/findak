import {Twilio} from "twilio";
import env from "../../configuration/env";
import {AbstractService, UserService} from "..";
import {BAD_REQUEST_MESSAGES, BadRequestError} from "../../errors";
import {VerificationCodeModel, VerificationCodeSchema} from "../../models";
import {
  IError,
  CodeType,
  VerificationCodeDoc,
  VerifySMSCodePayload,
  VerificationCodeAttrs,
} from "../../interfaces";

class VerificationCodeService extends AbstractService<
  VerificationCodeAttrs,
  VerificationCodeDoc,
  VerificationCodeModel
> {
  constructor() {
    super("VerificationCode", VerificationCodeSchema);
  }

  public async sendSMS(phone_number: string, code_type: CodeType) {
    const code = String(Math.floor(Math.random() * 90000) + 10000);
    const twilio = new Twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
    try {
      const BODY: {[T in CodeType]: string} = {
        recover_password: `Para cambiar tu contraseña en FINDAK usa este código: ${code}`,
        registration: `Tú codigo de verificación FINDAK es: ${code}`,
      };

      await twilio.messages.create({
        to: phone_number,
        from: "+17626002472",
        body: BODY[code_type],
      });

      const codeAlreadySent = await this.model.findOne({
        phone_number,
        type: code_type,
      });

      if (codeAlreadySent) {
        codeAlreadySent.code = code;
        return await this.update(codeAlreadySent._id, codeAlreadySent);
      }

      return await this.save({phone_number, code, type: code_type});
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }

  public async verifySMScode({
    code,
    type,
    phone_number,
    user_id,
  }: VerifySMSCodePayload) {
    try {
      // TODO remove this block after external QA
      if (code === "99911") {
        return {verified: true};
      }

      const codeFound = await this.model.findOne({code});

      if (codeFound) {
        const codeVerified = await this.model.findByIdAndUpdate(
          codeFound?._id,
          {...codeFound, verified: true}
        );

        switch (type) {
          case "registration":
            const user = await UserService.getById(user_id);
            await UserService.update(user._id, {...user, phone_number});
            break;
        }

        return codeVerified;
      }
      throw new BadRequestError(BAD_REQUEST_MESSAGES["INVALID_CODE"]);
    } catch (error) {
      throw new BadRequestError((error as IError).message);
    }
  }
}

const service = new VerificationCodeService();
export {service as VerificationCodeService};
