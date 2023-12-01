import {CreateSearchStep, SnapPoints} from "src/interfaces";
// prettier-ignore
export const CREATE_SEARCH_SNAP_POINTS: {
  [K in CreateSearchStep]: SnapPoints;
} = {
  "finish": ["85%", "90%"],
  "describe": ["95%", "100%"],
  "select-category": ["70%", "75%"],
  "select-search-type": ["21%", "26%"],
};
