import clsx from "clsx";
import {links} from "./helper";
import {PALETTE} from "styles";
import {useLocation} from "react-router-dom";
import {NavigationStyled, NavItem} from "./styles";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const location = useLocation();

  return (
    <NavigationStyled>
      {links.map(({label, icon: Icon, path}, key) => {
        const isHighlighted = path === location["pathname"];

        return (
          <NavItem
            to={path}
            key={path}
            className={clsx(isHighlighted && "highlighted")}
          >
            <Icon
              color={PALETTE["WHITE"]}
              strokeWidth={isHighlighted ? 2 : 1}
            />{" "}
            {label}
          </NavItem>
        );
      })}
    </NavigationStyled>
  );
};
