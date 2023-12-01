/**
 * @deprecated
 */

import {STYLES} from "./styles";
import {mockData} from "./mock-data";
import {Animated} from "react-native";
import {useCallback, useState} from "react";
import {SearchMockup, OfferMockup} from "./lib";
import {useMockAnimation} from "./useMockAnimation";

interface MockupProps {}

export const Mockup: React.FC<MockupProps> = () => {
  const [mockupIndex, setMockupIndex] = useState<number>(0);
  const {search, offer} = mockData[mockupIndex];

  const changeMockupIndex = useCallback(() => {
    setMockupIndex((prevIndex) => {
      if (prevIndex + 1 === mockData.length) return 0;
      return prevIndex + 1;
    });
  }, []);

  const {translateY, opacity} = useMockAnimation(changeMockupIndex);

  return (
    <Animated.View
      style={[STYLES["mockup"], {transform: [{translateY}], opacity}]}
    >
      <SearchMockup {...search} />
      <OfferMockup {...offer} />
    </Animated.View>
  );
};
