import type {RootState} from "../interfaces/redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {useAppSelector};
