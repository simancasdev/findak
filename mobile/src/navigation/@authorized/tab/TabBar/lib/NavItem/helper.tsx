import {PALETTE} from "src/styles";
import {AppTheme, SvgProps, Tab} from "src/interfaces";
import {Explore, Inbox, Sent, Trades, Menu, Home} from "src/svg";

type Lib = {
  [K in Tab]: (props: SvgProps) => JSX.Element;
};

const lib: Lib = {
  Explore: Explore,
  Inbox: Inbox,
  Sent: Sent,
  Trades: Trades,
  Menu: Menu,
  Home: Home,
};

export const getSvg = (
  name: Tab,
  isFocused: boolean,
  theme: AppTheme
): JSX.Element => {
  const Icon: (props: SvgProps) => JSX.Element = lib[name];
  return (
    <Icon
      size={24}
      strokeWidth={isFocused ? 3 : 1.5}
      color={
        isFocused
          ? PALETTE["PRIMARY"]
          : theme === "dark"
          ? PALETTE["WHITE"]
          : PALETTE["BLACK"]
      }
    />
  );
};
