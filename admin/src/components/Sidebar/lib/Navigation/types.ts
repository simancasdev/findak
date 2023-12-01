import {SvgProps} from "interfaces";

export type NavItem = {
  label: string;
  path: `/${string}`;
  icon: (props: SvgProps) => JSX.Element;
};
