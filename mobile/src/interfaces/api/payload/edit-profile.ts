import {Asset} from "react-native-image-picker";

export type EditProfilePayload = {
  slogan: string;
  first_name: string;
  last_name: string;
  biography: string;
  avatar_url: string | Asset;
};
