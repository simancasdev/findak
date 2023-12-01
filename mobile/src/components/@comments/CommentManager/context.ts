import {Context} from "./types";
import {createContext, useContext} from "react";

export const CommentManagerContext = createContext<Context>({
  comments: [],
  guideline: undefined,
  onComment: (comment: string) => {},
});

export const useCommentManager = () => {
  const values = useContext(CommentManagerContext);
  if (!values) {
    throw new Error(
      "You need a CommentManagerContext Provider to call `useCommentManager`"
    );
  }

  return values;
};
