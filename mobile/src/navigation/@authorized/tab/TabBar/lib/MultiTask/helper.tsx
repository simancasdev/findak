import {RootStackParamList, SvgProps} from "src/interfaces";
import {
  Sent,
  User,
  Edit,
  Users,
  Falcon,
  Trades,
  Support,
  BarChart,
  Inventory,
  PurchasePath,
} from "src/svg";

export const multitaskIcon: {
  [View in keyof Partial<RootStackParamList>]: (props: SvgProps) => JSX.Element;
} = {
  Sent: Sent,
  Profile: User,
  Trades: Trades,
  HelpMe: Support,
  EditProfile: Edit,
  MeetPeople: Users,
  ProductHunter: Falcon,
  MyInventory: Inventory,
  TodayTrending: BarChart,
  PurchasePath: PurchasePath,
};
