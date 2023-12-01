import {useTheme} from "src/hooks";
import {PurchasePath} from "src/views";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

interface PurchasePathStackProps {}

export const PurchasePathStack: React.FC<PurchasePathStackProps> = () => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
      }}
    >
      <Stack.Screen name="Initial" component={PurchasePath} />
    </Stack.Navigator>
  );
};
