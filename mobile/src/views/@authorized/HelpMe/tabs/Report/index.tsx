import {Formik} from "formik";
import {Fragment} from "react";
import {reasons} from "./reasons";
import {PALETTE} from "src/styles";
import {TValue} from "src/languages";
import {useAppDispatch, useLang} from "src/hooks";
import {helpMeSchema, initialValues} from "./form.schema";
import {
  List,
  Input,
  Button,
  Column,
  Dropdown,
  Typography,
} from "src/components/@system";
import {
  openSheet,
  closeSheet,
  createReport,
  CREATE_REPORT_LOADER,
} from "src/redux/slices";

interface ReportProps {}

export const Report: React.FC<ReportProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Typography fontSize={16} marginBottom={15}>
        {t("let_us_know_something_you_want_or_worry_about")}
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={helpMeSchema}
        onSubmit={(values, {resetForm}) =>
          dispatch(createReport({...values, onSuccess: resetForm}))
        }
      >
        {({
          dirty,
          values,
          errors,
          isValid,
          handleBlur,
          handleSubmit,
          handleChange,
        }) => (
          <Column>
            <Dropdown
              label={
                values["reason"]
                  ? t(
                      reasons.find((r) => r["id"] === values["reason"])
                        ?.name as TValue
                    )
                  : t("select_a_reason")
              }
              onPress={() => {
                dispatch(
                  openSheet({
                    snapPoints: ["1%", "50%"],
                    view: (
                      <List
                        defaultValue={values["reason"]}
                        UIProps={{title: `${t("i_need")}...`}}
                        data={reasons.map((reason) => ({
                          name: t(reason["name"]),
                          id: reason["id"],
                        }))}
                        onSelect={(id) => {
                          handleChange({target: {name: "reason", value: id}});
                          dispatch(closeSheet());
                        }}
                      />
                    ),
                  })
                );
              }}
            />
            <Input
              multiline
              style={{minHeight: 100}}
              value={values["description"]}
              placeholder={t("description")}
              onBlur={handleBlur("description")}
              onChangeText={handleChange("description")}
              helperText={t(errors["description"] as TValue)}
            />
            <Button
              onPress={handleSubmit}
              style={{marginTop: 15}}
              label={t("send_report")}
              labelColor={PALETTE["WHITE"]}
              disabled={!(dirty && isValid)}
              loaderColor={PALETTE["WHITE"]}
              loaderId={CREATE_REPORT_LOADER}
            />
          </Column>
        )}
      </Formik>
    </Fragment>
  );
};
