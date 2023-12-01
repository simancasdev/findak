import {Fragment} from "react";
import {Children} from "src/interfaces";
import {Border, BorderProps} from "src/components/@system";

interface ComponentSeparatorProps extends BorderProps, Children {
  show?: boolean;
}

export const ComponentSeparator: React.FC<ComponentSeparatorProps> = (
  props
) => {
  const {children, ...rest} = props;
  return (
    <Fragment>
      {children}
      <Border {...rest} />
    </Fragment>
  );
};
