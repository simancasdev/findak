export type SkeletonManager = {
  placeholder: JSX.Element;
  howMany?: number;
};

export type ErrorManager = {tryAgain: () => void};

export type EmptyManager = {
  title?: string;
  helperText?: string;
  icon?: JSX.Element | NodeRequire;
  body?: JSX.Element;
};
