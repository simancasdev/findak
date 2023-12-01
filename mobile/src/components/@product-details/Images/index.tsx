import {STYLES} from "./styles";
import {WIDTH_SCREEN} from "src/utils";
import {Image, View} from "react-native";
import {useAppDispatch} from "src/hooks";
import {openMultimedia} from "src/redux/slices";
import Carousel from "react-native-snap-carousel";
import {useEffect, useRef, useState} from "react";
import {Touchable, Typography} from "src/components/@system";

interface ImagesProps {
  sources: string[];
}

export const Images: React.FC<ImagesProps> = ({sources}) => {
  const dispatch = useAppDispatch();
  const carouselRef = useRef<Carousel<string>>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!sources?.length) return;
    setLoaded(false);
    Image.getSize(sources[0], () => {
      setLoaded(true);
    });
  }, [sources]);

  return (
    <View style={STYLES["images"]}>
      <Carousel
        data={sources}
        ref={carouselRef}
        itemWidth={WIDTH_SCREEN}
        sliderWidth={WIDTH_SCREEN}
        onSnapToItem={(slideIndex) => setCurrentSlide(slideIndex + 1)}
        renderItem={({index, item}) => (
          <Touchable
            key={index}
            onPress={() =>
              dispatch(openMultimedia({sources, initialSource: item}))
            }
          >
            <Image
              source={{uri: item}}
              style={{width: WIDTH_SCREEN, height: 300}}
            />
          </Touchable>
        )}
      />
      {sources.length > 1 && (
        <View style={STYLES["pagination"]}>
          <Typography style={STYLES["pagination_label"]}>
            {currentSlide} / {sources.length}
          </Typography>
        </View>
      )}
    </View>
  );
};
