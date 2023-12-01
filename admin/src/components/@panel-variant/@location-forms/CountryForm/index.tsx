import {Formik} from "formik";
import {Form} from "./styles";
import {CountryModel} from "interfaces";
import {Button, Input} from "components/@system";
import {useAppDispatch, useAppSelector} from "hooks";
import {initialValues, loginSchema} from "./form.schema";
import {selectLocationState, updateCountry, createCountry} from "redux/slices";

interface CountryFormProps {}

export const CountryForm: React.FC<CountryFormProps> = () => {
  const dispatch = useAppDispatch();
  const {countryForm} = useAppSelector(selectLocationState);
  const {id} = countryForm;
  const isUpdate = typeof id !== "undefined";

  return (
    <Formik
      initialValues={isUpdate ? (countryForm as CountryModel) : initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, {resetForm}) => {
        if (isUpdate) {
          dispatch(updateCountry(values as CountryModel));
        } else {
          dispatch(createCountry(values));
          resetForm();
        }
      }}
    >
      {({handleSubmit, handleChange, dirty, isValid, errors, values}) => (
        <Form>
          <Input
            name="name"
            label="Name"
            error={errors["name"]}
            value={values["name"]}
            onChange={handleChange}
            placeholder="Country Name"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!(dirty && isValid)}
            label={id ? "Update" : "Create"}
          />
        </Form>
      )}
    </Formik>
  );
};
