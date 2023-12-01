type Country = "VE" | "USA" | "ARG";

export type CountryPhone = {
  flag: any;
  id: Country;
  mask: string;
  label: string;
  prefix: `+${string}`;
};

export const codes: CountryPhone[] = [
  {
    id: "VE",
    label: "Venezuela",
    prefix: "+58",
    mask: "4122234455",
    flag: require("src/images/png/flags/ve.png"),
  },
  {
    id: "USA",
    label: "Estados Unidos",
    prefix: "+1",
    mask: "9714442211",
    flag: require("src/images/png/flags/usa.png"),
  },
  {
    id: "ARG",
    label: "Argentina",
    prefix: "+54",
    mask: "91142233111",
    flag: require("src/images/png/flags/ar.png"),
  },
];
