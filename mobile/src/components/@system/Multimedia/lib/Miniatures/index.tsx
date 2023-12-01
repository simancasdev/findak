import {Fragment} from "react";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {Image, View} from "react-native";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {Touchable, RowScrollable} from "src/components/@system";
import {selectMultimediaState, onChangeMultimediaIndex} from "src/redux/slices";

interface MiniaturesProps {}

export const Miniatures: React.FC<MiniaturesProps> = () => {
  const dispatch = useAppDispatch();
  const {sources, activeIndex} = useAppSelector(selectMultimediaState);

  return typeof sources !== "undefined" ? (
    <View style={STYLES["miniatures"]}>
      <RowScrollable gap={0} rowHeight={80}>
        {sources.map((src, key) => {
          const miniatureActived = activeIndex === key;
          return (
            <Touchable
              key={key}
              onPress={() => dispatch(onChangeMultimediaIndex(key))}
              style={{
                padding: 3,
                borderRadius: 5,
                borderWidth: 2,
                borderColor: miniatureActived
                  ? PALETTE["QUATERNARY"]
                  : undefined,
              }}
            >
              <Image style={STYLES["miniature"]} source={{uri: src}} />
            </Touchable>
          );
        })}
      </RowScrollable>
    </View>
  ) : (
    <Fragment />
  );
};
