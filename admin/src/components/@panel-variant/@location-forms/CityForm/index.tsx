import {Formik} from "formik";
import {Form} from "./styles";
import {CityModel} from "interfaces";
import {useAppDispatch, useAppSelector} from "hooks";
import {Button, Input, Select} from "components/@system";
import {initialValues, loginSchema} from "./form.schema";
import {selectLocationState, updateCity, createCity} from "redux/slices";

interface CityFormProps {}

export const CityForm: React.FC<CityFormProps> = () => {
  const dispatch = useAppDispatch();
  const {cityForm, countries} = useAppSelector(selectLocationState);
  const {data} = countries;
  const {id} = cityForm;
  const isUpdate = typeof id !== "undefined";

  return (
    <Formik
      initialValues={
        isUpdate
          ? (cityForm as CityModel)
          : {...initialValues, country_id: !data.length ? "" : data[0]["id"]}
      }
      validationSchema={loginSchema}
      onSubmit={(values, {resetForm}) => {
        if (isUpdate) {
          dispatch(updateCity(values as CityModel));
        } else {
          dispatch(createCity(values));
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
            placeholder="City Name"
            onChange={handleChange}
          />
          <Select
            label="Country"
            name="country_id"
            error={errors["country_id"]}
            value={values["country_id"]}
            onChange={handleChange}
            options={data.map(({name, id}) => ({
              label: name,
              value: id,
            }))}
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
