import {Header} from "./lib";
import {useState} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import AccordionComponent from "react-native-collapsible/Accordion";

type Section = {id: number; title: string; content: JSX.Element};

interface AccordionProps {
  sections: Section[];
  mode?: "one-by-one" | "multiple";
  contentStyle?: StyleProp<ViewStyle>;
}

export const Accordion: React.FC<AccordionProps> = ({
  sections,
  mode = "one-by-one",
  contentStyle,
}) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([0]);
  return (
    <AccordionComponent
      onChange={() => {}}
      activeSections={activeIndexes}
      sections={sections}
      renderHeader={({title, id}) => (
        <Header
          title={title}
          opened={id === activeIndexes[0]}
          onPress={() => {
            if (mode === "multiple") {
              setActiveIndexes((prevIndexes) => {
                const duplicated = prevIndexes.findIndex(
                  (prevIndex) => prevIndex === id
                );
                if (duplicated === -1) {
                  return [...prevIndexes, id];
                }
                return prevIndexes.filter((index) => index !== id);
              });
            } else {
              setActiveIndexes([id]);
            }
          }}
        />
      )}
      renderContent={({content}) => <View style={contentStyle}>{content}</View>}
    />
  );
};
