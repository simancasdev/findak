import * as Yup from "yup";
import {VerifySMSCodePayload} from "src/interfaces";

export const initialValues: VerifySMSCodePayload = {
  code: "",
};

export const verifyCodeSchema = Yup.object().shape({
  code: Yup.string().min(5),
});
