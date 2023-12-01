import {Trades} from "src/views";
import {useTheme} from "src/hooks";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface TradesStackProps {}

export const TradesStack: React.FC<TradesStackProps> = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_VIEW"]},
      }}
    >
      <Stack.Screen name="Initial" component={Trades} />
    </Stack.Navigator>
  );
};
