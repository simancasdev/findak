import {StackNavigationProp, StackScreenProps} from "@react-navigation/stack";
import {
  UserModel,
  PartnerType,
  ProductModel,
  CollectionModel,
  ConversationType,
} from "../models";

export type RootStackParamList = {
  Map: undefined;
  Tabs: undefined;
  Home: undefined;
  Sent: undefined;
  Inbox: undefined;
  Login: undefined;
  Trades: undefined;
  HelpMe: undefined;
  Result: undefined;
  SignUp: undefined;
  Landing: undefined;
  Explore: undefined;
  Profile: undefined;
  SetAlert: undefined;
  Messenger: undefined;
  Onboarding: undefined;
  MyLocation: undefined;
  MeetPeople: undefined;
  SetLocation: undefined;
  EditProfile: undefined;
  MyInventory: undefined;
  PurchasePath: undefined;
  TodayTrending: undefined;
  BecomePremium: undefined;
  ProductHunter: undefined;
  Notifications: undefined;
  MySearchAlert: undefined;
  ResetPassword: undefined;
  MyProductsList: undefined;
  ForgotPassword: undefined;
  Congratulations: undefined;
  CompleteProfile: undefined;
  ManageCollection: undefined;
  PhoneVerification: undefined;
  CategoryTrending: {
    categoryId: string;
  };
  VerifyCode: {
    phoneNumber: string;
    onVerificationSucceed: () => void;
  };
  Offer: {
    offerId: string;
  };
  Search: {
    searchId: string;
  };
  Trade: {
    tradeId: string;
  };
  UploadProduct: {
    product: ProductModel | undefined;
  };
  ProductDetails: {
    productId: string;
    hideActions?: boolean;
  };
  CreateCollection?: {
    collection: CollectionModel | undefined;
  };
  Feedbacks: {
    userId: string;
    title?: string;
  };
  UserProfile: {
    userId: string;
    enableMessengerButton?: boolean;
  };
  Chat: {
    withUser: UserModel;
    product?: ProductModel;
    type: ConversationType;
    conversation_id: string;
    partnerType?: PartnerType;
  };
};

export type ViewParam<T extends keyof RootStackParamList> = StackNavigationProp<
  RootStackParamList,
  T
>;

export type ViewNavigationProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
