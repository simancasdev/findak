import {Insets} from "react-native";
import {SvgProps} from "../svg-icons";

export type ListView = "categories" | "location" | "search-alert";

export type ListType = "products" | "services" | "countries" | "cities";

export type ListItem = {
  id: string;
  name: string;
  icon?: (props: SvgProps) => JSX.Element | NodeRequire;
};

export interface ListUIProps {
  title: string;
  icon?: JSX.Element;
  helperText?: string;
  onPress?: () => void;
}

export interface ListProps {
  data: ListItem[];
  UIProps?: ListUIProps;
  contentInset?: Insets;
  emptyMessage?: string;
  autoTranslate?: boolean;
  multipleSelection?: boolean;
  defaultValue?: string | string[];
  onSelect: (id: string | string[]) => void;
  defaultIcon?: (props: SvgProps) => JSX.Element;
}
