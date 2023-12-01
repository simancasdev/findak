import {useRef} from "react";
import {STYLES} from "./styles";
import {Children} from "src/interfaces";
import {ScrollView, View} from "react-native";

interface MessagesProps extends Children {}

export const Messages: React.FC<MessagesProps> = ({children}) => {
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <View style={STYLES["box"]}>
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{flexGrow: 1, justifyContent: "flex-end"}}
        onContentSizeChange={(contentHeight) => {
          scrollViewRef.current?.scrollTo({y: contentHeight + 120000});
        }}
      >
        <View onStartShouldSetResponder={() => true}>{children}</View>
      </ScrollView>
    </View>
  );
};
