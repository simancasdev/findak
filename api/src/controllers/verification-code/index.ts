import {Request, Response} from "express";
import {BaseController} from "../base.controller";
import {VerificationCodeModel} from "../../models";
import {VerificationCodeService} from "../../services";
import {
  IError,
  VerificationCodeAttrs,
  VerificationCodeDoc,
} from "../../interfaces";

class VerificationCodeController extends BaseController<
  VerificationCodeAttrs,
  VerificationCodeDoc,
  VerificationCodeModel
> {
  constructor() {
    super("verification_code", "/verification", VerificationCodeService, false);

    this.router.post(
      "/send/sms",
      async (req: Request, res: Response) => await this.sendSMS(req, res)
    );
    this.router.post(
      "/verify/code",
      async (req: Request, res: Response) => await this.verifySMScode(req, res)
    );

    super.initializeBaseRoutes();
  }

  private async sendSMS(req: Request, res: Response) {
    const {phone_number, type} = req.body;
    try {
      const verificationCode = await VerificationCodeService.sendSMS(
        phone_number,
        type
      );
      return res.status(200).send(verificationCode);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }

  private async verifySMScode(req: Request, res: Response) {
    const {code, phone_number, type} = req.body;

    try {
      const verified = await VerificationCodeService.verifySMScode({
        code,
        type,
        phone_number,
        user_id: req?.currentUser?.current_user_id,
      });
      return res.status(200).send(verified);
    } catch (error) {
      return res.status(401).send({message: (error as IError).message});
    }
  }
}

const controller = new VerificationCodeController();
export {controller as VerificationCodeController};
