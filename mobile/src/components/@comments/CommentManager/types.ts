import {Style, SearchCommentModel, APIStatus} from "src/interfaces";

export interface Context extends CommentManagerProps {
  createAPIstatus: APIStatus;
  newComments: SearchCommentModel[];
  create: (comment: string) => void;
}

export interface CommentManagerProps extends Style {
  modelId: string;
  guideline?: string;
  placeholder?: string;
  comments?: SearchCommentModel[];
  onIsFocused?: (focused: boolean) => void;
}
