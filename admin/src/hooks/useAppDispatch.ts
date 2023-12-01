import {useDispatch} from "react-redux";
import type {AppDispatch} from "../interfaces/redux";

const useAppDispatch = () => useDispatch<AppDispatch>();

export {useAppDispatch};
