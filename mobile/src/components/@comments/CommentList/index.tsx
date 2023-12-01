import {Comment} from "../Comment";
import {SearchCommentModel} from "src/interfaces";
import {Column, Typography} from "src/components/@system";
import {useCommentManager} from "../CommentManager/context";

interface CommentListProps {}

export const CommentList: React.FC<CommentListProps> = () => {
  const {comments, guideline, newComments} = useCommentManager();

  const allComments: SearchCommentModel[] = [];
  if (comments) allComments.push(...comments);
  allComments.push(...newComments);

  return (
    <Column gap={10} marginTop={10}>
      {guideline && <Typography>{guideline}</Typography>}
      <Column>
        {allComments.map((comment, key) => (
          <Comment comment={comment} key={key} />
        ))}
      </Column>
    </Column>
  );
};
