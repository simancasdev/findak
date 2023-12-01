import {STYLES} from "./styles";
import {useCallback} from "react";
import {useSearch} from "../../context";
import {openMultimedia} from "src/redux/slices";
import {useAppDispatch, useLang} from "src/hooks";
import {Column, Row} from "src/components/@system";
import {Image, TouchableWithoutFeedback, View} from "react-native";

export const BROKEN_IMAGE_PLACEHOLDER = require("src/images/png/broken-photo.png");

interface ImagesProps {
  sources: string[];
}

export const Images: React.FC<ImagesProps> = ({sources}) => {
  const {t} = useLang();
  const {search} = useSearch();
  const {budget, user} = search;
  const dispatch = useAppDispatch();

  const onPress = useCallback((url: string) => {
    dispatch(
      openMultimedia({
        sources,
        initialSource: url,
        UIProps: {
          title: t("reference_images"),
          helperText: `${user["first_name"]} ${t(
            "is_willing_to_pay"
          )} $${budget}`,
        },
      })
    );
  }, []);

  switch (sources.length) {
    case 1:
      return (
        <TouchableWithoutFeedback
          disabled={!sources[0]}
          onPress={() => onPress(sources[0])}
        >
          <Image
            source={sources[0] ? {uri: sources[0]} : BROKEN_IMAGE_PLACEHOLDER}
            style={[
              STYLES["image"],
              {
                width: "100%",
                height: 200,
              },
            ]}
          />
        </TouchableWithoutFeedback>
      );
    case 2:
      return (
        <Row justifyContent="space-between" style={{overflow: "hidden"}}>
          {sources.map((uri, key) => (
            <TouchableWithoutFeedback
              key={key}
              disabled={!uri}
              onPress={() => onPress(uri)}
            >
              <Image
                source={uri ? {uri} : BROKEN_IMAGE_PLACEHOLDER}
                style={[
                  STYLES["image"],
                  {
                    width: "50%",
                    height: 200,
                  },
                ]}
              />
            </TouchableWithoutFeedback>
          ))}
        </Row>
      );
    case 3:
      return (
        <Row
          gap={5}
          style={{overflow: "hidden"}}
          justifyContent="space-between"
        >
          <TouchableWithoutFeedback
            disabled={!sources[0]}
            onPress={() => onPress(sources[0])}
          >
            <Image
              source={sources[0] ? {uri: sources[0]} : BROKEN_IMAGE_PLACEHOLDER}
              style={[
                STYLES["image"],
                {
                  width: "50%",
                  height: 204,
                },
              ]}
            />
          </TouchableWithoutFeedback>
          <Column style={{width: "50%"}}>
            {sources.slice(1).map((uri, key) => (
              <TouchableWithoutFeedback
                key={key}
                disabled={!uri}
                onPress={() => onPress(uri)}
              >
                <Image
                  source={uri ? {uri} : BROKEN_IMAGE_PLACEHOLDER}
                  style={[
                    STYLES["image"],
                    {
                      width: "100%",
                      height: 100,
                    },
                  ]}
                />
              </TouchableWithoutFeedback>
            ))}
          </Column>
        </Row>
      );
    default:
      return <View />;
  }
};
