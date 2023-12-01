import {useTheme} from "src/hooks";
import {Explore, Results, MeetPeople} from "src/views";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface ExploreStackProps {}

export const ExploreStack: React.FC<ExploreStackProps> = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
      }}
    >
      <Stack.Screen name="Initial" component={Explore} />
      <Stack.Screen name="MeetPeople" component={MeetPeople} />
      <Stack.Screen name="Result" component={Results} />
    </Stack.Navigator>
  );
};
