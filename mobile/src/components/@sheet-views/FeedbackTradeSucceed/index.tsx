import {Formik} from "formik";
import {STYLES} from "./styles";
import {TValue} from "src/languages";
import {PALETTE, styleOS} from "src/styles";
import {Stars} from "src/components/@feedback";
import {StarValue, UserModel} from "src/interfaces";
import {feedbackSchema, initialValues} from "./form.schema";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";
import {Input, Avatar, Button, Column, Typography} from "../../@system";
import {
  sendFeedback,
  selectAuthState,
  SEND_FEEDBACK_LOADER,
} from "src/redux/slices";

interface FeedbackTradeSucceedProps {
  to: UserModel;
}

export const FeedbackTradeSucceed: React.FC<FeedbackTradeSucceedProps> = ({
  to,
}) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {authUserId} = useAppSelector(selectAuthState);
  const {avatar_url, first_name, last_name} = to;

  return (
    <Formik
      validationSchema={feedbackSchema}
      initialValues={{
        ...initialValues,
        to: to["id"],
        from: authUserId,
      }}
      onSubmit={(values, {resetForm}) => {
        dispatch(
          sendFeedback({
            // @ts-ignore
            feedback: {...values, to: to["id"]},
            callback: () => {
              resetForm();
            },
          })
        );
      }}
    >
      {({handleSubmit, dirty, isValid, handleChange, values, errors}) => (
        <Column gap={10}>
          <Typography style={{textAlign: "center"}} fontWeight={styleOS("400")}>
            {t("please_rate_your_experience")}
          </Typography>

          <Column
            style={STYLES["trade_succeed"]}
            marginVertical={5}
            alignItems="center"
            gap={5}
          >
            <Avatar size={100} src={avatar_url} name={first_name} />
            <Typography fontSize={25} fontWeight={styleOS("700")}>
              {first_name} {last_name}
            </Typography>
            <Stars
              gap={2}
              defaultValue={values["stars"] as StarValue}
              onChange={(star) =>
                handleChange({target: {name: "stars", value: star}})
              }
            />
          </Column>
          <Input
            multiline
            value={values["feedback"]}
            placeholder={t("leave_a_comment")}
            onChangeText={handleChange("feedback")}
            helperText={t(errors["feedback"] as TValue)}
            containerStyle={{maxHeight: 150}}
          />
          <Button
            label={t("send")}
            labelColor={PALETTE["WHITE"]}
            loaderColor={PALETTE["WHITE"]}
            disabled={!(dirty && isValid)}
            onPress={() => handleSubmit()}
            loaderId={SEND_FEEDBACK_LOADER}
          />
        </Column>
      )}
    </Formik>
  );
};
