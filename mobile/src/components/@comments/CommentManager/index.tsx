import {useMemo} from "react";
import {STYLES} from "./styles";
import {showComments} from "./helper";
import {useCreate} from "./hooks/useCreate";
import {CommentManagerProps} from "./types";
import {CommentInput, CommentList} from "..";
import {Column} from "src/components/@system";
import {CommentManagerContext} from "./context";

export const CommentManager: React.FC<CommentManagerProps> = ({
  style,
  modelId,
  comments,
  guideline,
  placeholder,
  onIsFocused,
}) => {
  const {newComments, create, createAPIstatus} = useCreate(modelId);
  const showCommentList = showComments(comments, newComments);

  const values = useMemo(
    () => ({
      create,
      modelId,
      comments,
      guideline,
      placeholder,
      onIsFocused,
      newComments,
      createAPIstatus,
    }),
    [comments, newComments, createAPIstatus]
  );

  return (
    <CommentManagerContext.Provider value={values}>
      <Column
        gap={showCommentList ? 10 : 0}
        style={[STYLES["comment_manager"], style]}
      >
        {showCommentList && <CommentList />}
        <CommentInput />
      </Column>
    </CommentManagerContext.Provider>
  );
};
