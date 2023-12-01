import {Formik} from "formik";
import {Form} from "./styles";
import {CategoryModel} from "interfaces";
import {useAppDispatch, useAppSelector} from "hooks";
import {Button, Input, Select} from "components/@system";
import {initialValues, loginSchema} from "./form.schema";
import {
  updateCategory,
  createCategory,
  selectCategoryState,
} from "redux/slices";

interface CategoryFormProps {}

export const CategoryForm: React.FC<CategoryFormProps> = () => {
  const dispatch = useAppDispatch();
  const {form} = useAppSelector(selectCategoryState);
  const {id} = form;
  const isUpdate = typeof id !== "undefined";

  return (
    <Formik
      initialValues={isUpdate ? (form as CategoryModel) : initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, {resetForm}) => {
        if (isUpdate) {
          dispatch(updateCategory(values as CategoryModel));
        } else {
          dispatch(createCategory(values));
          resetForm();
        }
      }}
    >
      {({handleSubmit, handleChange, dirty, isValid, errors, values}) => (
        <Form>
          <Input
            autoFocus
            name="name"
            label="Name"
            error={errors["name"]}
            value={values["name"]}
            onChange={handleChange}
            placeholder="Category name"
          />
          <Select
            name="type"
            label="Category Type"
            error={errors["type"]}
            value={values["type"]}
            onChange={handleChange}
            options={[
              {label: "Product", value: "product"},
              {label: "Service", value: "service"},
              {label: "Course", value: "course"},
            ]}
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
