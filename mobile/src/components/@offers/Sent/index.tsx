import {useMemo} from "react";
import {STYLES} from "./styles";
import {Head, Body} from "./lib";
import {useTheme} from "src/hooks";
import {SentContext} from "./context";
import {Container} from "../../@system";
import {OfferModel} from "src/interfaces";

interface SentProps {
  offer: OfferModel;
  onPress?: (offerId: string) => void;
}

export const Sent: React.FC<SentProps> = ({offer}) => {
  const {colors} = useTheme();
  const values = useMemo(() => ({offer}), []);

  return (
    <SentContext.Provider value={values}>
      <Container style={[STYLES["sent"], {backgroundColor: colors["CARD"]}]}>
        <Head />
        <Body />
      </Container>
    </SentContext.Provider>
  );
};
