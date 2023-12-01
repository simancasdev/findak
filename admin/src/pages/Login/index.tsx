import {Formik} from "formik";
import {FindakLogo} from "svg";
import {PALETTE} from "styles";
import {login} from "redux/slices";
import {useAppDispatch} from "hooks";
import {Branding, Form, LoginLayout} from "./styled";
import {initialValues, loginSchema} from "./form.schema";
import {Button, Column, Input, Typography} from "components/@system";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <LoginLayout>
      <Branding>
        <FindakLogo width={300} height={150} />
        <Typography fontSize={18} color={PALETTE["WHITE"]}>
          Admin access
        </Typography>
      </Branding>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => dispatch(login(values))}
      >
        {({handleSubmit, handleChange, dirty, isValid, errors, values}) => (
          <Form>
            <Column gap={8} style={{width: "80%"}}>
              <Typography fontWeight="500" fontSize={18}>
                Welcome back
              </Typography>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                error={errors["email"]}
                value={values["email"]}
                onChange={handleChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                error={errors["password"]}
                value={values["password"]}
              />

              <Button
                type="submit"
                label="Login"
                onClick={handleSubmit}
                style={{marginTop: 15}}
                disabled={!(dirty && isValid)}
              />
            </Column>
          </Form>
        )}
      </Formik>
    </LoginLayout>
  );
};
