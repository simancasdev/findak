import {HelpMe} from "src/views";
import {useTheme} from "src/hooks";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface HelpMeStackProps {}

export const HelpMeStack: React.FC<HelpMeStackProps> = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
      }}
    >
      <Stack.Screen name="Initial" component={HelpMe} />
    </Stack.Navigator>
  );
};
