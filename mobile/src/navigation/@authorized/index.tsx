import {memo} from "react";
import {TabViews} from "./tab";
import {useTheme} from "../../hooks";
import {STRIPE_PUBLISHABLE_KEY} from "@env";
import {RootStackParamList} from "../../interfaces";
import {createStackNavigator} from "@react-navigation/stack";
import {StripeProvider} from "@stripe/stripe-react-native";
import {
  Chat,
  Offer,
  Trade,
  Search,
  Messenger,
  Feedbacks,
  UserProfile,
  BecomePremium,
  Notifications,
  ProductDetails,
  Congratulations,
  CategoryTrending,
} from "../../views";

const Stack = createStackNavigator<RootStackParamList>();

interface AuthorizedProps {}

export const Authorized: React.FC<AuthorizedProps> = memo(() => {
  const {colors} = useTheme();

  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: colors["BACKGROUND_VIEW"]},
        }}
      >
        <Stack.Screen
          name="Tabs"
          component={TabViews}
          options={{
            cardStyle: {backgroundColor: colors["BACKGROUND_TAB_VIEWS"]},
          }}
        />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Trade" component={Trade} />
        <Stack.Screen name="Offer" component={Offer} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Feedbacks" component={Feedbacks} />
        <Stack.Screen name="Messenger" component={Messenger} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="BecomePremium" component={BecomePremium} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
        <Stack.Screen name="CategoryTrending" component={CategoryTrending} />
      </Stack.Navigator>
    </StripeProvider>
  );
});

export * from "./tab";
