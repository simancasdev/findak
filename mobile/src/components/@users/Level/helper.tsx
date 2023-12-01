import {SvgProps} from "src/interfaces";
import {UserLevel} from "src/interfaces";
import {New, Beginner, Experienced, Professional} from "src/svg";

type Lib = {
  [K in UserLevel]: (props: SvgProps) => JSX.Element;
};

const lib: Lib = {
  new: New,
  beginner: Beginner,
  experienced: Experienced,
  professional: Professional,
};

export const getSvg = (level: UserLevel, size: number): JSX.Element => {
  const Icon: (props: SvgProps) => JSX.Element = lib[level];
  return <Icon size={size} />;
};
