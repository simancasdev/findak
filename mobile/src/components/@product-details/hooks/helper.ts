import {LikeModel} from "src/interfaces";

export const doILikedIt = (likes: LikeModel[], authUserId: string): boolean => {
  const me = likes.find((like) => like["user"]["id"] === authUserId);
  return typeof me !== "undefined";
};
