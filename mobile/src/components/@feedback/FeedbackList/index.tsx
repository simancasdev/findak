import {STYLES} from "./styles";
import {Column, Empty} from "../../@system";
import {UserFeedback} from "../UserFeedback";
import {EmptyManager, FeedbackModel} from "src/interfaces";

interface FeedbackListProps {
  feedbacks: FeedbackModel[];
  emptyMessage?: Pick<EmptyManager, "title" | "helperText">;
}

export const FeedbackList: React.FC<FeedbackListProps> = ({
  feedbacks = [],
  emptyMessage,
}) => {
  return (
    <Column alignItems="center" style={[STYLES["list"]]}>
      {!feedbacks.length && emptyMessage ? (
        <Empty
          marginVertical={10}
          emptyUI={{
            title: emptyMessage["title"],
            helperText: emptyMessage["helperText"],
            icon: require("src/images/png/star-half-empty.png"),
          }}
        />
      ) : (
        feedbacks.map((feedback, key) => (
          <UserFeedback key={key} feedback={feedback} />
        ))
      )}
    </Column>
  );
};
