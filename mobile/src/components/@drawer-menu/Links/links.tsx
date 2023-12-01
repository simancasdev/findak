import {TValue} from "src/languages";
import {RootStackParamList, SvgProps} from "src/interfaces";
import {
  Sent,
  User,
  Users,
  Trades,
  Falcon,
  Support,
  BarChart,
  Inventory,
  PurchasePath,
} from "src/svg";

type Link = {
  label: TValue;
  path: keyof RootStackParamList;
  Icon: (svg: SvgProps) => JSX.Element;
};

export const links: Link[] = [
  {
    Icon: User,
    label: "profile",
    path: "Profile",
  },
  {
    Icon: Trades,
    label: "trades",
    path: "Trades",
  },
  {
    Icon: Sent,
    label: "sent",
    path: "Sent",
  },
  {
    Icon: Inventory,
    label: "my_inventory",
    path: "MyInventory",
  },
  {
    Icon: Users,
    label: "meet_people",
    path: "MeetPeople",
  },
  {
    Icon: BarChart,
    label: "today_trending",
    path: "TodayTrending",
  },
  {
    Icon: Falcon,
    label: "product_hunter",
    path: "ProductHunter",
  },
  {
    Icon: PurchasePath,
    label: "purchase_path",
    path: "PurchasePath",
  },
  {
    Icon: Support,
    label: "help_me",
    path: "HelpMe",
  },
];
