export type MultimediaUIProps = {
  title: string;
  helperText?: string;
};

export type OpenMultimediaPayload = {
  sources: string[];
  initialSource?: string;
  UIProps?: MultimediaUIProps;
};
