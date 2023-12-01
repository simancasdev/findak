import {NavItem} from "./types";
import {Category, Home, Location, Users} from "svg";

export const links: NavItem[] = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Users",
    path: "/users",
    icon: Users,
  },
  {
    label: "Categories",
    path: "/categories",
    icon: Category,
  },
  {
    label: "Countries and cities",
    path: "/location",
    icon: Location,
  },
];
