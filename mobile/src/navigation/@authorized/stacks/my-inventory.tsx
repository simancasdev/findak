import {useTheme} from "src/hooks";
import {createStackNavigator} from "@react-navigation/stack";
import {
  MyInventory,
  UploadProduct,
  MyProductsList,
  CreateCollection,
  ManageCollection,
} from "src/views";

const Stack = createStackNavigator();

interface MyInventoryStackProps {}

export const MyInventoryStack: React.FC<MyInventoryStackProps> = () => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
      }}
    >
      <Stack.Screen name="Initial" component={MyInventory} />
      <Stack.Screen name="UploadProduct" component={UploadProduct} />
      <Stack.Screen name="MyProductsList" component={MyProductsList} />
      <Stack.Screen name="ManageCollection" component={ManageCollection} />
      <Stack.Screen name="CreateCollection" component={CreateCollection} />
    </Stack.Navigator>
  );
};
