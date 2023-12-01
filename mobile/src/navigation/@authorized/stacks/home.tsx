import {Home} from "src/views";
import {useTheme} from "src/hooks";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface HomeStackProps {}

export const HomeStack: React.FC<HomeStackProps> = () => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
      }}
    >
      <Stack.Screen name="Initial" component={Home} />
    </Stack.Navigator>
  );
};
