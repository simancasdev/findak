import {Fragment} from "react";
import {MessageCircle} from "src/svg";
import {Guideline} from "src/components/@system";
import {selectSearchState} from "src/redux/slices";
import {CommentManager} from "src/components/@comments";
import {useAppSelector, useLang, useTheme} from "src/hooks";

interface CommentsProps {}

export const Comments: React.FC<CommentsProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {id, comments} = useAppSelector(selectSearchState)["search"];

  return (
    <Fragment>
      <Guideline
        marginTop={25}
        marginBottom={!comments.length ? 8 : 0}
        icon={<MessageCircle color={colors["WHITE_BLACK"]} />}
      >
        {t("comments")}
      </Guideline>
      <CommentManager comments={comments} modelId={id} />
    </Fragment>
  );
};
