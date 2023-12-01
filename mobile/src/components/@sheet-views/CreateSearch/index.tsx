import {Formik} from "formik";
import {Fragment} from "react";
import {useFirebaseStorage} from "src/hooks";
import {createSearch} from "src/redux/slices";
import {Asset} from "react-native-image-picker";
import {loadCreateSearchStep} from "./load-step";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {selectCreateSearchState} from "src/redux/slices";
import {createSearchSchema, initialValues} from "./form.schema";

interface CreateSearchProps {}

export const CreateSearch: React.FC<CreateSearchProps> = () => {
  const dispatch = useAppDispatch();
  const {uploadPhotos} = useFirebaseStorage();
  const {createSearchStep} = useAppSelector(selectCreateSearchState);

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={createSearchSchema}
        onSubmit={async (values, {resetForm}) => {
          let {references_url} = values;

          references_url = (await uploadPhotos(
            references_url as Asset[],
            "photos/searches"
          )) as string[];

          dispatch(createSearch({...values, references_url}));
        }}
      >
        {() => loadCreateSearchStep(createSearchStep)}
      </Formik>
    </Fragment>
  );
};
