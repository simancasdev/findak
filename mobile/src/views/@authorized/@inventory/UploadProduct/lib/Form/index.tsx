import {TValue} from "src/languages";
import {useFormikContext} from "formik";
import {UploadProductPayload} from "src/interfaces";
import {SelectCollection} from "src/components/@sheet-views";
import {getCategoryName, getCollectionName} from "src/utils";
import {openSheet, selectInventoryState} from "src/redux/slices";
import {Column, Dropdown, Input, Uploader} from "src/components/@system";
import {DEFAULT_SNAP_POINTS} from "src/redux/slices/bottom-sheet/helper";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
  useLang,
  useAppDispatch,
  useAppSelector,
  useCategoriesSheet,
} from "src/hooks";

interface FormProps {}

export const Form: React.FC<FormProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {myCollection} = useAppSelector(selectInventoryState);
  const {handleBlur, handleChange, errors, values} = useFormikContext<UploadProductPayload>();
  const {categories, open} = useCategoriesSheet({
    showBackdrop: true,
    enablePanDownToClose: true,
    snapPoints: ["50%", "65%"],
    defaultSearchType: values["type"],
    defaultCategoryIds: values["category_id"],
    title: t("category_of_this_product_or_service"),
    onChangeType: (type) => handleChange({target: {name: "type", value: type}}),
    onChangeCategory: (id) => handleChange({target: {name: "category_id", value: id}})
  });

  return (
    <KeyboardAwareScrollView extraScrollHeight={100}>
      <Uploader
        sheetLayer="main"
        defaultValue={values["references_url"]}
        onAssetsChange={(assets) =>
          handleChange({target: {name: "references_url", value: assets}})
        }
      />
      <Column gap={8} marginTop={10}>
        <Input
          value={values["title"]}
          placeholder={t("title")}
          onBlur={handleBlur("title")}
          onChangeText={handleChange("title")}
          helperText={
            errors["title"]
              ? t(errors["title"] as TValue)
              : "Inluye palabras claves como marca, tamaño, Año, etc"
          }
        />
        <Input
          keyboardType="decimal-pad"
          onBlur={handleBlur("price")}
          placeholder={`($) ${t("price")}`}
          helperText={t(errors["price"] as TValue)}
          value={!values["price"] ? "" : String(values["price"])}
          onChangeText={(value) => {
            handleChange({target: {name: "price", value}});
          }}
        />
        <Input
          maxLength={3}
          keyboardType="number-pad"
          onBlur={handleBlur("discount")}
          placeholder={`(%) ${t("discount")}`}
          helperText={t(errors["discount"] as TValue)}
          value={!values["discount"] ? "" : String(values["discount"])}
          onChangeText={(value) => {
            handleChange({target: {name: "discount", value}});
          }}
        />
        <Dropdown
          onPress={() => open()}
          label={
            values["category_id"]
              ? t(
                  getCategoryName(
                    categories["data"],
                    values["category_id"] as string
                  )
                )
              : t("select_a_category")
          }
        />
        <Dropdown
          marginVertical={5}
          label={
            values["collection_id"]
              ? getCollectionName(
                  myCollection,
                  values["collection_id"] as string
                )
              : t("select_a_collection")
          }
          onPress={() => {
            dispatch(
              openSheet({
                snapPoints: DEFAULT_SNAP_POINTS["SELECT_COLLECTION"],
                view: (
                  <SelectCollection
                    onCollection={(id) =>
                      handleChange({
                        target: {name: "collection_id", value: id},
                      })
                    }
                  />
                ),
              })
            );
          }}
        />

        <Input
          multiline
          value={values["description"]}
          placeholder={t("description")}
          onBlur={handleBlur("description")}
          style={{minHeight: 100, maxHeight: 160}}
          onChangeText={handleChange("description")}
          helperText={t(errors["description"] as TValue)}
        />
      </Column>
    </KeyboardAwareScrollView>
  );
};
