import {TValue} from "src/languages";

type Reason = {name: TValue; id: string};

export const reasons: Reason[] = [
  {
    name: "help_me_new_request_category",
    id: "new_request_category",
  },
  {
    name: "help_me_new_request_city",
    id: "new_request_city",
  },
  {
    name: "help_me_new_request_country",
    id: "new_request_country",
  },
  {
    name: "help_me_problem_with_an_user",
    id: "problem_with_an_user",
  },
  {
    name: "help_me_problem_with_scam",
    id: "problem_with_scam",
  },
];
