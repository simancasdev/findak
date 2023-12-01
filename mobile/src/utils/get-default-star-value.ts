import {FeedbackModel} from "../interfaces";

export const getDefaultStarValue = (
  feedbacks: FeedbackModel[] = []
): number => {
  if (!feedbacks.length) return 0;

  const initialValue = 0;
  return Math.floor(
    feedbacks.reduce((acc, value) => acc + value.stars, initialValue) /
      feedbacks.length
  );
};
