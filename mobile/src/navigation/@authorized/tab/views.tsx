import {TabBar} from "./TabBar";
import {useTheme} from "src/hooks";
import {Inbox, MeetPeople, Sent, Today} from "src/views";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
  HomeStack,
  HelpMeStack,
  TradesStack,
  ProfileStack,
  ExploreStack,
  MyInventoryStack,
  PurchasePathStack,
  ProductHunterStack,
} from "../stacks";

interface TabViewsProps {}

const Tab = createBottomTabNavigator();

export const TabViews: React.FC<TabViewsProps> = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={(props) => <TabBar options={props} />}
      sceneContainerStyle={{backgroundColor: colors["BACKGROUND_TAB_VIEWS"]}}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Sent" component={Sent} />
      <Tab.Screen name="Trades" component={TradesStack} />
      <Tab.Screen name="TodayTrending" component={Today} />
      <Tab.Screen name="HelpMe" component={HelpMeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="MeetPeople" component={MeetPeople} />
      <Tab.Screen name="MyInventory" component={MyInventoryStack} />
      <Tab.Screen name="PurchasePath" component={PurchasePathStack} />
      <Tab.Screen name="ProductHunter" component={ProductHunterStack} />
    </Tab.Navigator>
  );
};
