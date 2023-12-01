import {ButtonLoaderId} from "src/interfaces";
import {useAppSelector} from "./useAppSelector";
import {selectLoaderState} from "src/redux/slices";

export const useButtonLoader = (
  loaderId: ButtonLoaderId | undefined
): boolean => {
  const {buttonLoaderIds} = useAppSelector(selectLoaderState);
  const loading = !!loaderId && buttonLoaderIds.includes(loaderId);
  return loading;
};
