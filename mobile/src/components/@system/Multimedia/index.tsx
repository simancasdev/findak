import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {WIDTH_SCREEN} from "src/utils";
import {useAppSelector} from "src/hooks";
import {Miniatures, Toolbar} from "./lib";
import {useEffect, useState} from "react";
import {selectMultimediaState} from "src/redux/slices";
import {ActivityIndicator, Animated, Image} from "react-native";
import {useEffectWhenMultimediaIsClosed, useShowMultimedia} from "./hooks";

interface MultimediaProps {}

export const Multimedia: React.FC<MultimediaProps> = () => {
  const {translateY} = useShowMultimedia();
  const [height, setHeight] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const {sources = [], activeIndex} = useAppSelector(selectMultimediaState);
  const [displayMultimedia, setDisplayMultimedia] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (!sources?.length) return;
    setLoaded(false);
    Image.getSize(sources[activeIndex], (_, height) => {
      setHeight(height);
      setDisplayMultimedia(sources[activeIndex]);
      setLoaded(true);
    });
  }, [sources, activeIndex]);

  useEffectWhenMultimediaIsClosed(() => {
    setHeight(0);
    setLoaded(false);
  }, []);

  return (
    <Animated.View style={[STYLES["multimedia"], {transform: [{translateY}]}]}>
      <Toolbar />
      {sources.length > 1 && <Miniatures />}
      {loaded ? (
        <Image
          style={{
            width: WIDTH_SCREEN,
            height: height * 0.9,
            resizeMode: "contain",
          }}
          source={{
            uri: displayMultimedia,
          }}
        />
      ) : (
        <ActivityIndicator size="small" color={PALETTE["WHITE"]} />
      )}
    </Animated.View>
  );
};
