import {useState} from "react";
import {getCategories} from "../redux/slices";
import {SetAlertPayload} from "../interfaces";
import {useAppDispatch} from "./useAppDispatch";
import {useEffectWhenIsFocused} from "./useEffectWhenIsFocused";

type OnChange = (key: keyof SetAlertPayload, value: string) => void;

const INITIAL_STATE: SetAlertPayload = {
  category_id: "",
  type: "product",
};

export const useListSearchAlert = (
  defaultState?: SetAlertPayload
): {
  payload: SetAlertPayload;
  onChange: OnChange;
} => {
  const dispatch = useAppDispatch();
  const [payload, setPayload] = useState<SetAlertPayload>(
    defaultState ?? INITIAL_STATE
  );

  const onChange = (key: keyof SetAlertPayload, value: string): void => {
    setPayload((prev) => ({...prev, [key]: value}));
  };

  useEffectWhenIsFocused(() => {
    dispatch(getCategories());
  }, []);

  return {payload, onChange};
};
