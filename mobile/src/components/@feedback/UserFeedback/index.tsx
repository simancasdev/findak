import {Stars} from "../Stars";
import {STYLES} from "./styles";
import {FeedbackModel} from "src/interfaces";
import {Avatar, Column, Container, Row, Typography} from "../../@system";

interface UserFeedbackProps {
  feedback: FeedbackModel;
}

export const UserFeedback: React.FC<UserFeedbackProps> = ({feedback}) => {
  const {from, feedback: text, stars} = feedback;
  return (
    <Row style={[STYLES["user_feedback"]]}>
      <Column style={STYLES["user"]} alignItems="center">
        <Avatar name={from["first_name"]} size={25} src={from["avatar_url"]} />
        <Typography numberOfLines={1} fontSize={12}>
          {from["first_name"]}
        </Typography>
      </Column>
      <Container style={STYLES["body"]}>
        <Column gap={2}>
          <Stars starSize={18} gap={2} defaultValue={stars} />
          <Typography>{text}</Typography>
        </Column>
      </Container>
    </Row>
  );
};
