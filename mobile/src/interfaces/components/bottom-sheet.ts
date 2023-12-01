export type SnapIndex = 0 | 1;

export type SnapPoint = `${string}%`;

export type SnapPoints = [SnapPoint, SnapPoint];

export type BottomSheetLayer = "main" | "optional";

export interface OpenSheetPayload extends BaseSheetProps {
  layer?: BottomSheetLayer;
}

export interface BaseSheetProps {
  snapIndex?: SnapIndex;
  showBackdrop?: boolean;
  onBackdrop?: () => void;
  view: JSX.Element | undefined;
  enablePanDownToClose?: boolean;
  snapPoints?: [SnapPoint, SnapPoint];
}

export type SheetVariants =
  | "LIST"
  | "OPTIONS"
  | "FEEDBACK"
  | "SEND_OFFER"
  | "MEET_PEOPLE"
  | "UPGRADE_ACCOUNT"
  | "SELECT_COLLECTION"
  | "UPDATE_HEADER_COVER"
  | "CHANGE_HEADER_IMAGE"
  | "UPLOAD_IMAGE_OPTIONS";
