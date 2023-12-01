import {useTheme} from "src/hooks";
import {createStackNavigator} from "@react-navigation/stack";
import {Profile, MyLocation, MySearchAlert, EditProfile} from "src/views";

const Stack = createStackNavigator();

interface ProfileStackProps {}

export const ProfileStack: React.FC<ProfileStackProps> = () => {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_VIEW"]},
      }}
    >
      <Stack.Screen
        name="Initial"
        component={Profile}
        options={{cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]}}}
      />
      <Stack.Screen name="MyLocation" component={MyLocation} />
      <Stack.Screen name="MySearchAlert" component={MySearchAlert} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
