import {useMemo} from "react";
import {STYLES} from "./styles";
import {Body, Head} from "./lib";
import {ReceivedContext} from "./context";
import {OfferModel, ViewParam} from "src/interfaces";
import {useNavigation} from "@react-navigation/native";
import {Container, Row, Touchable} from "../../@system";

interface ReceivedProps {
  offer: OfferModel;
  onPress?: (offerId: string) => void;
}

export const Received: React.FC<ReceivedProps> = ({offer}) => {
  const {navigate} = useNavigation<ViewParam<"Offer">>();
  const values = useMemo(() => ({offer}), [offer]);

  return (
    <ReceivedContext.Provider value={values}>
      <Container style={STYLES["received"]}>
        <Touchable onPress={() => navigate("Offer", {offerId: offer["id"]})}>
          <Row alignItems="flex-start">
            <Head />
            <Body />
          </Row>
        </Touchable>
      </Container>
    </ReceivedContext.Provider>
  );
};
