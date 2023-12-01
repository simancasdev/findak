import {Context} from "./types";
import {createContext, useContext} from "react";
import {INITIAL_USER} from "../../../redux/initial-states";

export const ChatContext = createContext<Context>({
  type: "regular",
  product: undefined,
  partnerType: "buyer",
  withUser: INITIAL_USER,
});

export const useChat = () => {
  const values = useContext(ChatContext);
  if (!values) {
    throw new Error("You need a ChatContext Provider to call `useChat`");
  }

  return values;
};
