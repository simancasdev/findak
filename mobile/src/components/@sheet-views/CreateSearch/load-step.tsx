import {CreateSearchStep} from "src/interfaces";
import {Describe, Finish, SelectCategory, SelectSearchType} from "./steps";

export const loadCreateSearchStep = (step: CreateSearchStep): JSX.Element => {
  switch (step) {
    case "select-search-type":
      return <SelectSearchType />;
    case "select-category":
      return <SelectCategory />;
    case "describe":
      return <Describe />;
    case "finish":
      return <Finish />;

    default:
      throw new Error(`Create search step: ${step} is not handled.`);
  }
};
