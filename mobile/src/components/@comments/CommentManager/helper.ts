import {SearchCommentModel} from "src/interfaces";

export const showComments = (
  comments: SearchCommentModel[] | undefined,
  newComments: SearchCommentModel[]
): boolean => {
  return (
    (typeof comments !== "undefined" && !!comments.length) ||
    !!newComments.length
  );
};
