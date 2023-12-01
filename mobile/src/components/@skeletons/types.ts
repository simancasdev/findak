import {Style} from "../../interfaces";

export interface SkeletonProps extends Style {
  width?: number;
}

export interface SkeletonLib<T = SkeletonProps> {
  Trade: React.FC<SkeletonProps>;
  Search: React.FC<SkeletonProps>;
  Report: React.FC<SkeletonProps>;
  Message: React.FC<SkeletonProps>;
  ListItem: React.FC<SkeletonProps>;
  Feedback: React.FC<SkeletonProps>;
  OfferSent: React.FC<SkeletonProps>;
  SentScreen: React.FC<SkeletonProps>;
  HomeScreen: React.FC<SkeletonProps>;
  TradeScreen: React.FC<SkeletonProps>;
  InboxScreen: React.FC<SkeletonProps>;
  OfferScreen: React.FC<SkeletonProps>;
  SearchAlert: React.FC<SkeletonProps>;
  TradesScreen: React.FC<SkeletonProps>;
  SearchScreen: React.FC<SkeletonProps>;
  Conversation: React.FC<SkeletonProps>;
  ProfileScreen: React.FC<SkeletonProps>;
  ProductScreen: React.FC<SkeletonProps>;
  OfferReceived: React.FC<SkeletonProps>;
  TrendingManager: React.FC<SkeletonProps>;
  ProductListItem: React.FC<SkeletonProps>;
  UserPresentation: React.FC<SkeletonProps>;
  MyInventoryScreen: React.FC<SkeletonProps>;
  TodayTrendingScreen: React.FC<SkeletonProps>;
}
