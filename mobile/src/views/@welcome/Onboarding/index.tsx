import {NavigatorView} from "src/hoc";
import {WIDTH_SCREEN} from "src/utils";
import {PALETTE, styleOS} from "src/styles";
import {useLang, useTheme} from "src/hooks";
import {Fragment, useRef, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {Column, Typography} from "src/components/@system";
import Carousel, {Pagination} from "react-native-snap-carousel";

interface OnboardingProps {}

export const Onboarding: React.FC<OnboardingProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {goBack} = useNavigation();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carouselRef = useRef<Carousel<string>>(null);
  const items = ["key-1", "key-2"];

  return (
    <NavigatorView viewName="Onboarding">
      <Carousel
        style={{backgroundColor: "blue"}}
        data={items}
        ref={carouselRef}
        itemWidth={WIDTH_SCREEN}
        sliderWidth={WIDTH_SCREEN}
        onSnapToItem={(slideIndex) => setActiveSlide(slideIndex)}
        renderItem={({index, item}) => (
          <Fragment>
            <Column alignItems="center">
              <Typography style={{fontWeight: styleOS("600"), fontSize: 22}}>
                Crea búsquedas
              </Typography>
              <Typography style={{fontSize: 24, textAlign: "center"}}>
                Dile a las personas lo que necesitas
              </Typography>
              {/* <Row>
              <Typography>Desliza</Typography>
              <ChevronRight />
            </Row> */}
            </Column>
          </Fragment>
        )}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: PALETTE["PRIMARY"],
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      {/* <LinearGradient
        colors={["rgba(0,0,0, .05)", "rgba(0,0,0, .1)", "rgba(0,0,0, .2)"]}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: WIDTH_SCREEN,
          height: 50,
        }}
      >
        <View></View>
      </LinearGradient> */}
    </NavigatorView>
  );
};
