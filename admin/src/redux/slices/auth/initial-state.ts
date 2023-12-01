import {AuthSlice} from "./types";
import {INITIAL_USER} from "../../initial-states";

export const initialState: AuthSlice = {
  isLogged: false,
  user: INITIAL_USER,
  authenticating: true,
};
