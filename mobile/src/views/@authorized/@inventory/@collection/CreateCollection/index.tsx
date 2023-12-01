import {Formik} from "formik";
import {Fragment} from "react";
import {PALETTE} from "src/styles";
import {ChevronLeft} from "src/svg";
import {TValue} from "src/languages";
import {NavigatorView} from "src/hoc";
import {useNavigation} from "@react-navigation/native";
import {useLang, useAppDispatch, useTheme} from "src/hooks";
import {ViewNavigationProps, ViewParam} from "src/interfaces";
import {createCollectionSchema, initialValues} from "./form.schema";
import {Screen, TopBar, Input, Button, Column} from "src/components/@system";
import {
  updateCollection,
  createCollection,
  toggleButtonLoader,
  CREATE_COLLECTION_LOADER,
} from "src/redux/slices";

interface CreateCollectionProps
  extends ViewNavigationProps<"CreateCollection"> {}

export const CreateCollection: React.FC<CreateCollectionProps> = ({route}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation<ViewParam<"Explore">>();
  const collection = route["params"]
    ? route["params"]["collection"]
    : undefined;

  return (
    <NavigatorView viewName="CreateCollection">
      <Screen contentStyle={{paddingHorizontal: 15}}>
        <Formik
          validationSchema={createCollectionSchema}
          initialValues={
            collection ? {name: collection["name"]} : initialValues
          }
          onSubmit={(payload) => {
            dispatch(toggleButtonLoader(CREATE_COLLECTION_LOADER));
            if (collection) {
              dispatch(updateCollection({...payload, id: collection["id"]}));
            } else {
              dispatch(createCollection(payload));
            }
          }}
        >
          {({
            dirty,
            errors,
            values,
            isValid,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Fragment>
              <TopBar
                style={{marginBottom: 20}}
                back={{
                  onPress: goBack,
                  label: t("new_collection"),
                  icon: <ChevronLeft color={colors["WHITE_BLACK"]} />,
                }}
              />
              <Column gap={20}>
                <Input
                  autoFocus
                  value={values["name"]}
                  onBlur={handleBlur("name")}
                  placeholder={t("collection_name")}
                  onChangeText={handleChange("name")}
                  helperText={
                    errors["name"]
                      ? t(errors["name"] as TValue)
                      : t("create_collection_example")
                  }
                />
                <Button
                  onPress={handleSubmit}
                  labelColor={PALETTE["WHITE"]}
                  loaderColor={PALETTE["WHITE"]}
                  disabled={!(dirty && isValid)}
                  loaderId={CREATE_COLLECTION_LOADER}
                  label={collection ? t("update") : t("create")}
                />
              </Column>
            </Fragment>
          )}
        </Formik>
      </Screen>
    </NavigatorView>
  );
};
