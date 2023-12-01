import {styleOS} from "src/styles";
import {searchTypes} from "./helper";
import {useFormikContext} from "formik";
import {useInitCreateSearchFlow} from "./hooks";
import {NewSearchPayload} from "src/interfaces";
import {useAppDispatch, useLang} from "src/hooks";
import {onChangeCreateSearchStep} from "src/redux/slices";
import {
  Column,
  BoxButton,
  Typography,
  RowScrollable,
} from "src/components/@system";

interface SelectSearchTypeProps {}

export const SelectSearchType: React.FC<SelectSearchTypeProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {handleChange} = useFormikContext<NewSearchPayload>();
  useInitCreateSearchFlow();

  return (
    <Column gap={15}>
      <Typography fontSize={18} fontWeight={styleOS("500")}>
        {t("what_type_is_your_search")}
      </Typography>
      <RowScrollable rowHeight={100} fullWidth>
        {searchTypes.map(({label, image, searchType}, key) => (
          <BoxButton
            key={key}
            image={image}
            label={t(label)}
            onPress={() => {
              handleChange({target: {name: "type", value: searchType}});
              handleChange({target: {name: "category_id", value: ""}});
              dispatch(onChangeCreateSearchStep("select-category"));
            }}
          />
        ))}
      </RowScrollable>
    </Column>
  );
};
