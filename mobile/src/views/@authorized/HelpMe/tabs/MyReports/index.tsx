import {showSeparator} from "src/utils";
import {Fragment, useEffect} from "react";
import {ComponentSeparator} from "src/hoc";
import {Report} from "src/components/@report";
import {Skeleton} from "src/components/@skeletons";
import {ComponentManager} from "src/components/@system";
import {useLang, useAppSelector, useAppDispatch} from "src/hooks";
import {
  getMyReports,
  selectAuthState,
  selectReportState,
} from "src/redux/slices";

interface MyReportsProps {}

export const MyReports: React.FC<MyReportsProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {authUserId} = useAppSelector(selectAuthState);
  const {myReports, APIStatus} = useAppSelector(selectReportState);
  const {isLoading, error} = APIStatus["myReports"];

  useEffect(() => {
    dispatch(getMyReports(authUserId));
  }, []);

  return (
    <Fragment>
      <ComponentManager
        isError={error}
        data={myReports}
        isLoading={isLoading}
        preventLoadingStateOnRefresh={false}
        error={{tryAgain: () => dispatch(getMyReports(authUserId))}}
        skeleton={{placeholder: <Skeleton.Report />, howMany: 5}}
        emptyUI={{
          title: t("you_havent_reported_anything_yet"),
          icon: require("src/images/png/nothing-found.png"),
          helperText: t("here_you_will_have_their_history"),
        }}
      >
        {myReports.map((report, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={15}
            show={showSeparator(key, myReports)}
            children={<Report report={report} />}
          />
        ))}
      </ComponentManager>
    </Fragment>
  );
};
