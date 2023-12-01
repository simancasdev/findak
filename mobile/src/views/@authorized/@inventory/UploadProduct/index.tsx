import {Form} from "./lib";
import {Formik} from "formik";
import {Fragment} from "react";
import {STYLES} from "./styles";
import {ChevronLeft} from "src/svg";
import {NavigatorView} from "src/hoc";
import {Keyboard} from "react-native";
import {useViewActions} from "./useViewActions";
import {getMyCollection} from "src/redux/slices";
import {ViewNavigationProps} from "src/interfaces";
import {Screen, TopBar} from "src/components/@system";
import {useNavigation} from "@react-navigation/native";
import {initialValues, uploadProductSchema} from "./form.schema";
import {
  useLang,
  useTheme,
  useAppDispatch,
  useEffectWhenIsFocused,
} from "src/hooks";

interface UploadProductProps extends ViewNavigationProps<"UploadProduct"> {}

export const UploadProduct: React.FC<UploadProductProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();
  const product = route["params"] ? route["params"]["product"] : undefined;
  const {CRUD} = useViewActions(product);

  useEffectWhenIsFocused(() => {
    dispatch(getMyCollection());
  }, []);

  return (
    <NavigatorView viewName="UploadProduct">
      <Screen style={{paddingHorizontal: 15}}>
        <Formik
          validationSchema={uploadProductSchema}
          initialValues={product ? {...product} : initialValues}
          onSubmit={(values, helpers) => {
            Keyboard.dismiss();
            CRUD(values, helpers);
          }}
        >
          {({dirty, isValid, handleSubmit}) => (
            <Fragment>
              <TopBar
                style={[
                  STYLES["top_bar"],
                  {backgroundColor: colors["BACKGROUND_VIEW"]},
                ]}
                back={{
                  onPress: goBack,
                  label: t("new_product"),
                  icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
                }}
                action={{
                  onPress: handleSubmit,
                  disabled: !(dirty && isValid),
                  label: product ? t("update") : t("upload"),
                }}
              />
              <Form />
            </Fragment>
          )}
        </Formik>
      </Screen>
    </NavigatorView>
  );
};
