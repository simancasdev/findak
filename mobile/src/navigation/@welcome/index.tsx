import {memo} from "react";
import {useTheme} from "../../hooks";
import {createStackNavigator} from "@react-navigation/stack";
import {
  Login,
  SignUp,
  Landing,
  SetAlert,
  Onboarding,
  VerifyCode,
  SetLocation,
  ResetPassword,
  ForgotPassword,
  CompleteProfile,
  PhoneVerification,
} from "../../views";

const Stack = createStackNavigator();

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = memo(() => {
  const {colors} = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors["BACKGROUND_WELCOME_VIEWS"]},
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SetAlert" component={SetAlert} />
      <Stack.Screen name="VerifyCode" component={VerifyCode} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SetLocation" component={SetLocation} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
    </Stack.Navigator>
  );
});
