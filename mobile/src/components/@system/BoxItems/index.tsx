import {ComponentSeparator} from "src/hoc";
import {Row, Section, SectionProps, Typography} from "..";

type BoxItem = {
  label: string;
  border?: boolean;
  icon?: JSX.Element;
  value?: string | number;
};

interface BoxItemsProps {
  items: BoxItem[];
  sectionUI?: Omit<SectionProps, "children">;
}

export const BoxItems: React.FC<BoxItemsProps> = ({items, sectionUI}) => {
  return (
    <Section {...sectionUI}>
      {items.map(({icon, label, value, border = true}, key) => (
        <ComponentSeparator key={key} marginVertical={15} show={border}>
          <Row fullWidth justifyContent="space-between">
            <Row>
              {icon}
              <Typography>{label}</Typography>
            </Row>
            {value && <Typography>{value}</Typography>}
          </Row>
        </ComponentSeparator>
      ))}
    </Section>
  );
};
