import {SheetVariants, SnapPoint, SnapPoints} from "src/interfaces";

export const PREFIX = "bottom-sheet";

export const BASE_SNAP_POINTS: SnapPoints = ["1%", "100%"];

const DEFAULT_INITIAL_SNAP: SnapPoint = "1%";

export const DEFAULT_SNAP_POINTS: {
  [K in SheetVariants]: SnapPoints;
} = {
  MEET_PEOPLE: ["20%", "50%"],
  LIST: [DEFAULT_INITIAL_SNAP, "80%"],
  OPTIONS: [DEFAULT_INITIAL_SNAP, "25%"],
  FEEDBACK: [DEFAULT_INITIAL_SNAP, "90%"],
  SEND_OFFER: [DEFAULT_INITIAL_SNAP, "100%"],
  UPGRADE_ACCOUNT: [DEFAULT_INITIAL_SNAP, "45%"],
  SELECT_COLLECTION: [DEFAULT_INITIAL_SNAP, "45%"],
  CHANGE_HEADER_IMAGE: [DEFAULT_INITIAL_SNAP, "32%"],
  UPDATE_HEADER_COVER: [DEFAULT_INITIAL_SNAP, "25%"],
  UPLOAD_IMAGE_OPTIONS: [DEFAULT_INITIAL_SNAP, "25%"],
};
