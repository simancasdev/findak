import {PALETTE} from "src/styles";
import {doILikedIt} from "./helper";
import {useCallback, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector, useTheme} from "src/hooks";
import {
  likeIt,
  removeLike,
  selectAuthState,
  selectProductState,
  toggleButtonLoader,
  UPDATING_PRODUCT_LIKE_LOADER,
} from "src/redux/slices";

type UseIsLiked = {
  fill: string;
  liked: boolean;
  toggleLike: (productId: string) => void;
};

export const useIsLiked = (): UseIsLiked => {
  const {theme} = useTheme();
  const dispatch = useAppDispatch();
  const isLight = theme === "light";
  const {authUserId} = useAppSelector(selectAuthState);
  const {likes} = useAppSelector(selectProductState)["product"];
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    if (doILikedIt(likes, authUserId)) setLiked(true);
  }, [likes]);

  const toggleLike = useCallback(
    (productId: string) => {
      dispatch(toggleButtonLoader(UPDATING_PRODUCT_LIKE_LOADER));
      if (!liked) {
        dispatch(likeIt(productId));
      } else {
        dispatch(removeLike(productId));
      }
      setLiked(!liked);
    },
    [liked]
  );

  const fill = liked
    ? PALETTE["RED"]
    : isLight
    ? PALETTE["BLACK01"]
    : PALETTE["WHITE05"];

  return {liked, toggleLike, fill};
};
