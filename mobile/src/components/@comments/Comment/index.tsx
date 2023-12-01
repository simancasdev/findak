import {STYLES} from "./styles";
import {styleOS} from "src/styles";
import {useMoment, useTheme} from "src/hooks";
import {useNavigation} from "@react-navigation/native";
import {SearchCommentModel, ViewParam} from "src/interfaces";
import {
  Row,
  Avatar,
  Column,
  Touchable,
  Typography,
} from "src/components/@system";

interface CommentProps {
  comment: SearchCommentModel;
}

export const Comment: React.FC<CommentProps> = ({comment}) => {
  const {colors} = useTheme();
  const {moment} = useMoment();
  const {user, comment: text, createdAt} = comment;
  const {navigate} = useNavigation<ViewParam<"UserProfile">>();

  return (
    <Row gap={12} alignItems="flex-start">
      <Avatar
        size={35}
        src={user["avatar_url"]}
        name={user["first_name"]}
        onPress={() => navigate("UserProfile", {userId: user["id"]})}
      />
      <Column>
        <Column
          style={[STYLES["body"], {backgroundColor: colors["HOVER_LIGHT"]}]}
          gap={0}
        >
          <Touchable
            onPress={() => navigate("UserProfile", {userId: user["id"]})}
          >
            <Typography fontWeight={styleOS("600")}>
              {user["first_name"]}
            </Typography>
          </Touchable>
          <Typography fontSize={14} style={{flexShrink: 1}}>
            {text}
          </Typography>
        </Column>
        <Typography style={{color: colors["TEXT_TRANSPARENCY"], fontSize: 11}}>
          {moment(createdAt).fromNow()}
        </Typography>
      </Column>
    </Row>
  );
};
