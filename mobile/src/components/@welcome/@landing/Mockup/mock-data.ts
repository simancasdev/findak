import {TValue} from "src/languages";

type Data = {avatarUrl: string; text: TValue};
type MockData = {
  search: Data;
  offer: Data;
};

export const mockData: MockData[] = [
  {
    search: {
      avatarUrl: require("./mock-avatars/avatar-woman-1.jpg"),
      text: "mock_search_1",
    },
    offer: {
      avatarUrl: require("./mock-avatars/avatar-man-1.jpg"),
      text: "mock_offer_1",
    },
  },
  {
    search: {
      avatarUrl: require("./mock-avatars/avatar-man-2.jpg"),
      text: "mock_search_2",
    },
    offer: {
      avatarUrl: require("./mock-avatars/avatar-woman-2.jpg"),
      text: "mock_offer_2",
    },
  },
  {
    search: {
      avatarUrl: require("./mock-avatars/avatar-woman-3.jpg"),
      text: "mock_search_3",
    },
    offer: {
      avatarUrl: require("./mock-avatars/avatar-man-3.jpg"),
      text: "mock_offer_3",
    },
  },
];
