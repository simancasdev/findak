import {Fragment} from "react";
import {STYLES} from "./styles";
import {ComponentSeparator} from "src/hoc";
import {doILikedIt} from "../hooks/helper";
import {useAppSelector, useLang} from "src/hooks";
import {Avatar, Row, Typography} from "src/components/@system";
import {selectAuthState, selectProductState} from "src/redux/slices";

interface PeopleLikedProps {}

const MAX_USERS_DISPLAYED = 5;

export const PeopleLiked: React.FC<PeopleLikedProps> = () => {
  const {t} = useLang();
  const {authUserId} = useAppSelector(selectAuthState);
  const {likes} = useAppSelector(selectProductState)["product"];
  const iLikedIt = doILikedIt(likes, authUserId);
  const likesWithoutMe = likes.filter((like) => like["user_id"] !== authUserId);

  return !iLikedIt && !likes.length ? (
    <Fragment />
  ) : (
    <ComponentSeparator marginVertical={0}>
      <Row style={STYLES["people_liked"]}>
        <Row gap={0}>
          {likesWithoutMe.slice(0, MAX_USERS_DISPLAYED).map(({user}, key) => (
            <Avatar
              size={26}
              key={key}
              src={user["avatar_url"]}
              name={user["first_name"]}
            />
          ))}
        </Row>
        <Typography style={STYLES["people_liked_label"]}>
          {!likesWithoutMe.length && iLikedIt
            ? t("did_you_like_it")
            : !!likesWithoutMe.length && iLikedIt
            ? `${likesWithoutMe.length} ${t("people_liked_it_and_you")}`
            : `${likesWithoutMe.length} ${t("they_liked_it")}`}
        </Typography>
      </Row>
    </ComponentSeparator>
  );
};
