import {Fragment} from "react";
import {PALETTE} from "src/styles";
import {showSeparator} from "src/utils";
import {ComponentSeparator} from "src/hoc";
import {Option, OptionUIProps} from "src/interfaces";
import {Column, RowButton, TopBar} from "../../@system";

interface OptionsProps {
  options: Option[];
  UIProps?: OptionUIProps;
}

export const Options: React.FC<OptionsProps> = ({UIProps, options}) => {
  return (
    <Fragment>
      {UIProps && (
        <TopBar
          style={{marginBottom: 10}}
          back={{
            icon: UIProps["icon"],
            label: UIProps["title"],
            helperText: UIProps["helperText"],
            onPress: UIProps["onPress"],
          }}
        />
      )}
      <Column>
        {options.map((option, key) => (
          <ComponentSeparator
            key={key}
            marginVertical={0}
            show={showSeparator(key, options)}
          >
            <RowButton {...option} backgroundColor={PALETTE["TRANSPARENT"]} />
          </ComponentSeparator>
        ))}
      </Column>
    </Fragment>
  );
};
