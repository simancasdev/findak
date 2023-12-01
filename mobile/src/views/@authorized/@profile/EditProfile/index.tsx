import {Form} from "./lib";
import {Formik} from "formik";
import {NavigatorView} from "src/hoc";
import {useAppSelector} from "src/hooks";
import {Screen} from "src/components/@system";
import {useViewActions} from "./useViewActions";
import {selectAuthState} from "src/redux/slices";
import {editProfileSchema, initialValues} from "./form.schema";

interface EditProfileProps {}

export const EditProfile: React.FC<EditProfileProps> = () => {
  const {onSubmit} = useViewActions();
  const {user} = useAppSelector(selectAuthState);
  const {first_name, last_name, biography, avatar_url, slogan} = user;

  return (
    <NavigatorView viewName="EditProfile">
      <Screen contentStyle={{paddingHorizontal: 15}}>
        <Formik
          validationSchema={editProfileSchema}
          onSubmit={(values) => onSubmit(values)}
          initialValues={{
            ...initialValues,
            slogan,
            last_name,
            biography,
            first_name,
            avatar_url,
          }}
        >
          {() => <Form />}
        </Formik>
      </Screen>
    </NavigatorView>
  );
};
