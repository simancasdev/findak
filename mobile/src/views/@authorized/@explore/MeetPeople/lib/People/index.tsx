import {showSeparator} from "src/utils";
import {ViewParam} from "src/interfaces";
import {ComponentSeparator} from "src/hoc";
import {FINDAK_VARIABLES} from "src/constants";
import {Skeleton} from "src/components/@skeletons";
import {Presentation} from "src/components/@users";
import {useNavigation} from "@react-navigation/native";
import {getPeople, selectUserState} from "src/redux/slices";
import {Button, ComponentManager, Column} from "src/components/@system";
import {useLang, useShare, useAppDispatch, useAppSelector} from "src/hooks";

interface PeopleProps {}

export const People: React.FC<PeopleProps> = () => {
  const {t} = useLang();
  const {share} = useShare();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();
  const {people, APIStatus} = useAppSelector(selectUserState);
  const {isLoading, error} = APIStatus["people"];

  return (
    <ComponentManager
      isError={error}
      data={people["data"]}
      isLoading={isLoading}
      preventLoadingStateOnRefresh={false}
      error={{tryAgain: () => dispatch(getPeople())}}
      skeleton={{placeholder: <Skeleton.UserPresentation />, howMany: 8}}
      emptyUI={{
        title: t("we_have_nothing_to_show"),
        helperText: t("no_registered_users_in_your_country"),
        body: (
          <Button
            variant="text_only"
            label={t("invite_a_friend")}
            onPress={() =>
              share(
                `${t("findak_share_message")}: ${
                  FINDAK_VARIABLES["DOWNLOAD_URL"]
                }`
              )
            }
          />
        ),
      }}
    >
      <Column>
        {people["data"].map((user, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={2}
            show={showSeparator(key, people["data"])}
            children={
              <Presentation
                user={user}
                onPress={(userId) => navigate("UserProfile", {userId})}
              />
            }
          />
        ))}
      </Column>
    </ComponentManager>
  );
};
