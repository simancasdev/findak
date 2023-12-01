import {ProductSlice} from "../types";
import {likeIt, removeLike} from "../thunks";
import {ActionReducerMapBuilder, current} from "@reduxjs/toolkit";

export const LIKE_REDUCER = (
  builder: ActionReducerMapBuilder<ProductSlice>
) => {
  builder.addCase(likeIt.fulfilled, (state, action) => {
    const liked = action.payload;
    if (liked) {
      const {product} = current(state);
      state["product"]["likes"] = [...product["likes"], liked];
    }
  });

  builder.addCase(removeLike.fulfilled, (state, action) => {
    const removed = action.payload;
    if (removed) {
      const {product} = current(state);
      state["product"]["likes"] = product["likes"].filter(
        (like) => like["id"] !== removed["id"]
      );
    }
  });
};
